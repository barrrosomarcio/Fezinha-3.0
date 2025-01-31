import { Injectable } from '@nestjs/common';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { RESULTS } from '../lotofacil.data.js';
import { ConcursoLotoFacilEntity } from '../lotofacil.entity';
import { from, of, mergeMap, Observable, map, toArray } from 'rxjs';
import { mapConcursoLotoFacil } from 'src/shared/mappers/lotofacil';

type Batch = Array<ConcursoLotoFacilEntity>;

@Injectable()
export class SaveResultsStrategy {

  
  constructor(
    private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository,
  ) {}

  updateResults() {
    return from(this.lotoFacilRepository.getLastConcurso()).pipe(
      mergeMap((ultimoConcurso: ConcursoLotoFacilEntity) =>
        this.filterResults(ultimoConcurso),
      ),
      mergeMap((filteredResults: any) => this.mapResults(filteredResults)),
      map((mappedResults) => this.generateBatches(mappedResults)),
      mergeMap((batches) => batches),
      map((batch) => this.lotoFacilRepository.save(batch)),
      toArray(),
    );
  }

  private filterResults(ultimoConcurso: ConcursoLotoFacilEntity) {
    const numeroUltimoConcurso = !!ultimoConcurso ? ultimoConcurso.concurso : 0;
    return of(numeroUltimoConcurso).pipe(
      map(() =>
        RESULTS.filter(
          (resultado) =>
            parseInt(resultado.Concurso, 10) > numeroUltimoConcurso,
        ),
      ),
    );
  }

  private mapResults(
    fiteredResults: any[],
  ): Observable<ConcursoLotoFacilEntity[]> {
    return of(fiteredResults).pipe(
      map(() => fiteredResults.map((result) => mapConcursoLotoFacil(result))),
    );
  }

  private generateBatches(
    mappedResults: ConcursoLotoFacilEntity[],
    batchSize: number = 1000,
  ) {
    const result: Batch[] = [];
    for (let i = 0; i < mappedResults.length; i += batchSize) {
      const batch = mappedResults.slice(i, i + batchSize);
      result.push(batch);
    }
    return result;
  }
}
