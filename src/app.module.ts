import { Module } from '@nestjs/common';
import { LotoFacilModule } from './lotofacil/lotofacil.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LotoFacilModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
