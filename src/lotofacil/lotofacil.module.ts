import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveResultsStrategy } from './strategies/save-results.strategy';
import { ConcursoLotoFacilEntityRepository } from './lotofacil.repository';
import { ConcursoLotoFacilEntity } from './domain/lotofacil.entity';
import { LotoFacilController } from './lotofacil.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConcursoLotoFacilEntity])],
  controllers: [LotoFacilController],
  providers: [SaveResultsStrategy, ConcursoLotoFacilEntityRepository],
  exports: [SaveResultsStrategy, ConcursoLotoFacilEntityRepository],
})
export class LotoFacilModule {}
