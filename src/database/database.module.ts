import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseProvider, typeOrmOptions } from './database.provider';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        ...typeOrmOptions(),
        migrationsRun: true,
      }),
    }),
  ],
  exports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        DatabaseProvider,
        migrationsRun: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
