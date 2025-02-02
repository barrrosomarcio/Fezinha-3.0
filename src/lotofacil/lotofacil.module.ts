import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveResultsStrategy } from './strategies/save-results.strategy';
import { ConcursoLotoFacilEntityRepository } from './lotofacil.repository';
import { ConcursoLotoFacilEntity } from './domain/lotofacil.entity';
import { LotoFacilController } from './lotofacil.controller';
import { StatsStrategy } from './strategies/stats.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([ConcursoLotoFacilEntity])],
  controllers: [LotoFacilController],
  providers: [SaveResultsStrategy, StatsStrategy, ConcursoLotoFacilEntityRepository],
  exports: [SaveResultsStrategy, StatsStrategy, ConcursoLotoFacilEntityRepository],
})
export class LotoFacilModule {}
