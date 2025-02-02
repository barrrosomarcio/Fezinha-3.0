import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { ConcursoLotoFacilEntity } from './domain/lotofacil.entity';

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
}
