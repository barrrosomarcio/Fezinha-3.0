import { Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import {  SaveResultsStrategy } from './strategies/save-results.strategy';

@Controller('lotofacil')
export class LotoFacilController {
  constructor(private readonly saveResultsStrategy: SaveResultsStrategy) {}
  private readonly logger = new Logger(LotoFacilController.name);

  @Post('/update')
  @HttpCode(HttpStatus.ACCEPTED)
  updateResults() {
    return this.saveResultsStrategy.updateResults();
  }
}
