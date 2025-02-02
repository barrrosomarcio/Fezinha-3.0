import { ConcursoLotoFacilEntity } from 'src/lotofacil/domain/lotofacil.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Migrations } from './migrations/migrations';

export const DatabaseProvider = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DATABASE || 'fezinha',
  schema: 'public',
  username: process.env.POSTGRES_USER || 'fezinha',
  password: process.env.POSTGRES_PASSWORD || 'password',
  entities: [ConcursoLotoFacilEntity],
  synchronize: true,
  migrations: Migrations,
  migrationsTableName: 'migrations',
});

export const typeOrmOptions = (): DataSourceOptions => {
  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DATABASE || 'fezinha',
    schema: 'public',
    username: process.env.POSTGRES_USER || 'fezinha',
    password: process.env.POSTGRES_PASSWORD || 'password',
    entities: [ConcursoLotoFacilEntity],
    migrations: Migrations,
    logging: 'all',
    ssl: false,
  };
};

// export default DatabaseProvider;
