import { Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SaveResultsStrategy } from './strategies/save-results.strategy';
import { StatsStrategy } from './strategies/stats.strategy';
import { CurrentYearStatsStrategy } from './strategies/current-year-stats.strategy';
import { PastYearStatsStrategy } from './strategies/past-year-stats.strategy';
import { NumberFrequency } from './domain/lotofacil.types';

@Controller('lotofacil')
export class LotoFacilController {
  constructor(
    private readonly saveResultsStrategy: SaveResultsStrategy,
    private readonly statsStrategy: StatsStrategy,
    private readonly currentYearStatsStrategy: CurrentYearStatsStrategy,
    private readonly pastYearStatsStrategy: PastYearStatsStrategy,
  ) {}

  private readonly logger = new Logger(LotoFacilController.name);

  @Post('/update')
  @HttpCode(HttpStatus.ACCEPTED)
  updateResults(): Observable<object> {
    return this.saveResultsStrategy.updateResults();
  }

  @Get('/stats')
  getNumberStats(): Observable<NumberFrequency[]> {
    return this.statsStrategy.getTopNumbers();
  }

  @Get('/stats/current-year')
  getCurrentYearStats(): Observable<NumberFrequency[]> {
    return this.currentYearStatsStrategy.getCurrentYearTopNumbers();
  }

  @Get('/stats/past-year')
  getPastYearStats(): Observable<NumberFrequency[]> {
    return this.pastYearStatsStrategy.getPastYearTopNumbers();
  }
}
