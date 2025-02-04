import { DataSource } from 'typeorm';
import { ConcursoLotoFacilEntity } from './lotofacil/domain/lotofacil.entity';
import { RenameDataToDataSorteio1738710864341 } from './migrations/1738710864341-RenameDataToDataSorteio';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DATABASE || 'fezinha',
  schema: 'public',
  username: process.env.POSTGRES_USER || 'fezinha',
  password: process.env.POSTGRES_PASSWORD || 'password',
  entities: [ConcursoLotoFacilEntity],
  migrations: [RenameDataToDataSorteio1738710864341],
  migrationsTableName: 'migrations',
});
