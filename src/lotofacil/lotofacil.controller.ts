import { Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SaveResultsStrategy } from './strategies/save-results.strategy';
import { StatsStrategy } from './strategies/stats.strategy';
import { NumberFrequency } from './domain/lotofacil.types';

@Controller('lotofacil')
export class LotoFacilController {
  constructor(
    private readonly saveResultsStrategy: SaveResultsStrategy,
    private readonly statsStrategy: StatsStrategy,
  ) {}

  private readonly logger = new Logger(LotoFacilController.name);

  @Post('/update')
  @HttpCode(HttpStatus.ACCEPTED)
  updateResults(): Observable<unknown> {
    return this.saveResultsStrategy.updateResults();
  }

  @Get('/stats')
  getNumberStats(): Observable<NumberFrequency[]> {
    return this.statsStrategy.getTopNumbers();
  }
}
