import { Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { LotoFacilService } from './lotofacil.service';

@Controller('lotofacil')
export class LotoFacilController {
  constructor(private readonly lotoFacilService: LotoFacilService) {}
  private readonly logger = new Logger(LotoFacilController.name);

  @Post('/update')
  @HttpCode(HttpStatus.ACCEPTED)
  updateResults() {
    return this.lotoFacilService.updateResults();
  }
}
