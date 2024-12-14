import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcursoLotoFacilEntity } from './lotofacil.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConcursoLotoFacilEntityRepository {
  constructor(
    @InjectRepository(ConcursoLotoFacilEntity)
    private readonly concursoLotofacilRepository: Repository<ConcursoLotoFacilEntity>,
  ) {}

  getLastConcurso() {
    return this.concursoLotofacilRepository
      .createQueryBuilder()
      .orderBy('concurso', 'DESC')
      .limit(1)
      .getOne();
  }

  save(concursos: ConcursoLotoFacilEntity[]) {
    return this.concursoLotofacilRepository.save(concursos);
  }
}
