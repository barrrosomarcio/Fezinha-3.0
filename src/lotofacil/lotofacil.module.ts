import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotoFacilController } from './lotofacil.controller';
import { ConcursoLotoFacilEntity } from './domain/lotofacil.entity';
import { ConcursoLotoFacilEntityRepository } from './lotofacil.repository';
import { SaveResultsStrategy } from './strategies/save-results.strategy';
import { StatsStrategy } from './strategies/stats.strategy';
import { CurrentYearStatsStrategy } from './strategies/current-year-stats.strategy';
import { PastYearStatsStrategy } from './strategies/past-year-stats.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([ConcursoLotoFacilEntity])],
  controllers: [LotoFacilController],
  providers: [
    ConcursoLotoFacilEntityRepository,
    SaveResultsStrategy,
    StatsStrategy,
    CurrentYearStatsStrategy,
    PastYearStatsStrategy,
  ],
  exports: [
    SaveResultsStrategy,
    StatsStrategy,
    ConcursoLotoFacilEntityRepository,
    CurrentYearStatsStrategy,
    PastYearStatsStrategy,
  ],
})
export class LotoFacilModule {}
