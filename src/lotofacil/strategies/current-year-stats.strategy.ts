import { Injectable } from '@nestjs/common';
import { Observable, from, map, mergeMap, toArray } from 'rxjs';
import { ConcursoLotoFacilEntityRepository } from '../lotofacil.repository';
import { NumberFrequency } from '../domain/lotofacil.types';

@Injectable()
export class CurrentYearStatsStrategy {
  constructor(private readonly lotoFacilRepository: ConcursoLotoFacilEntityRepository) {}

  getCurrentYearTopNumbers(): Observable<NumberFrequency[]> {
    return from(this.lotoFacilRepository.getCurrentYearNumberFrequencies()).pipe(
      mergeMap((frequencies) => frequencies),
      mergeMap((frequency) => this.addCurrentYearCompanionNumbers(frequency)),
      toArray(),
    );
  }

  private addCurrentYearCompanionNumbers(frequency: NumberFrequency): Observable<NumberFrequency> {
    return this.lotoFacilRepository.getCurrentYearCompanionNumbers(frequency.number).pipe(
      map((companionNumbers) => ({
        ...frequency,
        companionNumbers,
      })),
    );
  }
}
