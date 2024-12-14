import { Module } from '@nestjs/common';
import { LotoFacilService } from './lotofacil.service';
import { ConcursoLotoFacilEntityRepository } from './lotofacil.repository';
import { ConcursoLotoFacilEntity } from './lotofacil.entity';
import { LotoFacilController } from './lotofacil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ConcursoLotoFacilEntity])],
  controllers: [LotoFacilController],
  providers: [LotoFacilService, ConcursoLotoFacilEntityRepository],
  exports: [ConcursoLotoFacilEntityRepository],
})
export class LotoFacilModule {}
