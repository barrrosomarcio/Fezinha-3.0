import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConcursoLotoFacilEntity } from './domain/lotofacil.entity';
import { NumberFrequency } from './domain/lotofacil.types';
import { mostDrawnNumbersQuery } from './domain/lotofacil.queries';

interface RawNumberFrequency {
  number: string;
  frequency: string;
}

@Injectable()
export class ConcursoLotoFacilEntityRepository {
  constructor(
    @InjectRepository(ConcursoLotoFacilEntity)
    private readonly concursoLotofacilRepository: Repository<ConcursoLotoFacilEntity>,
  ) {}

  getLastConcurso(): Observable<ConcursoLotoFacilEntity> {
    return from(
      this.concursoLotofacilRepository
        .createQueryBuilder()
        .orderBy('concurso', 'DESC')
        .limit(1)
        .getOne(),
    );
  }

  save(concursos: ConcursoLotoFacilEntity[]): Observable<ConcursoLotoFacilEntity[]> {
    return from(this.concursoLotofacilRepository.save(concursos));
  }

  getNumberFrequencies(): Observable<NumberFrequency[]> {
    return from(this.concursoLotofacilRepository.query(mostDrawnNumbersQuery)).pipe(
      map((rawResults: RawNumberFrequency[]) =>
        rawResults.map((result) => ({
          number: parseInt(result.number, 10),
          frequency: parseInt(result.frequency, 10),
          companionNumbers: [],
        })),
      ),
    );
  }
}
