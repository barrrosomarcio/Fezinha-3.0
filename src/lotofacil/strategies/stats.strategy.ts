import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { NumberFrequency } from '../domain/lotofacil.types';

@Injectable()
export class StatsStrategy {
  constructor(
    private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository,
  ) {}

  getTopNumbers(): Observable<NumberFrequency[]> {
    return this.lotoFacilRepository.getNumberFrequencies();
  }
}
