import { Injectable } from '@nestjs/common';
import { from, of, mergeMap, Observable, map, toArray } from 'rxjs';
import { mapConcursoLotoFacil, RawResult } from '../../shared/mappers/lotofacil';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { RESULTS } from '../lotofacil.data';
import { ConcursoLotoFacilEntity } from '../domain/lotofacil.entity';

type Batch = Array<ConcursoLotoFacilEntity>;

@Injectable()
export class SaveResultsStrategy {
  constructor(private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository) {}

  updateResults(): Observable<(ConcursoLotoFacilEntity | Observable<ConcursoLotoFacilEntity[]>)[]> {
    return from(this.lotoFacilRepository.getLastConcurso()).pipe(
      mergeMap((ultimoConcurso: ConcursoLotoFacilEntity) => this.filterResults(ultimoConcurso)),
      mergeMap((filteredResults: RawResult[]) => this.mapResults(filteredResults)),
      map((mappedResults: ConcursoLotoFacilEntity[]) => this.generateBatches(mappedResults)),
      mergeMap((batches: Batch[]) => batches),
      map((batch: Batch) => this.lotoFacilRepository.save(batch)),
      toArray(),
    );
  }

  private filterResults(ultimoConcurso: ConcursoLotoFacilEntity): Observable<RawResult[]> {
    const numeroUltimoConcurso = ultimoConcurso ? ultimoConcurso.concurso : 0;
    return of(numeroUltimoConcurso).pipe(
      map(() =>
        RESULTS.filter((resultado) => parseInt(resultado.Concurso, 10) > numeroUltimoConcurso),
      ),
    );
  }

  private mapResults(filteredResults: RawResult[]): Observable<ConcursoLotoFacilEntity[]> {
    return of(filteredResults).pipe(
      map(() => filteredResults.map((result) => mapConcursoLotoFacil(result))),
    );
  }

  private generateBatches(
    mappedResults: ConcursoLotoFacilEntity[],
    batchSize: number = 1000,
  ): Batch[] {
    const result: Batch[] = [];
    for (let i = 0; i < mappedResults.length; i += batchSize) {
      const batch = mappedResults.slice(i, i + batchSize);
      result.push(batch);
    }
    return result;
  }
}
