import { Injectable } from '@nestjs/common';
import { Observable, from, map, mergeMap, toArray } from 'rxjs';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { NumberFrequency } from '../domain/lotofacil.types';

@Injectable()
export class StatsStrategy {
  constructor(private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository) {}

  getTopNumbers(): Observable<NumberFrequency[]> {
    return from(this.lotoFacilRepository.getNumberFrequencies()).pipe(
      mergeMap((frequencies) => frequencies),
      mergeMap((frequency) => this.addCompanionNumbers(frequency)),
      toArray(),
    );
  }

  private addCompanionNumbers(frequency: NumberFrequency): Observable<NumberFrequency> {
    return this.lotoFacilRepository.getCompanionNumbers(frequency.number).pipe(
      map((companionNumbers) => ({
        ...frequency,
        companionNumbers,
      })),
    );
  }
}
