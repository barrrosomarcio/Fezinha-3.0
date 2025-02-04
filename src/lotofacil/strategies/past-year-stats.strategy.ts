import { Injectable } from '@nestjs/common';
import { Observable, from, map, mergeMap, toArray } from 'rxjs';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { NumberFrequency } from '../domain/lotofacil.types';

@Injectable()
export class PastYearStatsStrategy {
  constructor(private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository) {}

  getPastYearTopNumbers(): Observable<NumberFrequency[]> {
    return from(this.lotoFacilRepository.getPastYearNumberFrequencies()).pipe(
      mergeMap((frequencies) => frequencies),
      mergeMap((frequency) => this.addPastYearCompanionNumbers(frequency)),
      toArray(),
    );
  }

  private addPastYearCompanionNumbers(frequency: NumberFrequency): Observable<NumberFrequency> {
    return this.lotoFacilRepository.getPastYearCompanionNumbers(frequency.number).pipe(
      map((companionNumbers) => ({
        ...frequency,
        companionNumbers,
      })),
    );
  }
}
