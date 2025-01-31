import { Module } from '@nestjs/common';
  import {  SaveResultsStrategy } from './strategies/save-results.strategy';
import { ConcursoLotoFacilEntityRepository } from './lotofacil.repository';
import { ConcursoLotoFacilEntity } from './lotofacil.entity';
import { LotoFacilController } from './lotofacil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConcursoLotoFacilEntity])],
  controllers: [LotoFacilController],
  providers: [SaveResultsStrategy, ConcursoLotoFacilEntityRepository],
  exports: [ConcursoLotoFacilEntityRepository],
})
export class LotoFacilModule {}
