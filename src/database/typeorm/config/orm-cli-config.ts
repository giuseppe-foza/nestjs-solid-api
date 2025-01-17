import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { join } from 'path';
import { DatabaseSeeder } from '@/database/typeorm/seeders/database-seeder';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '../../**/*.entity{.ts,.js}')],
};

const options: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,
  seeds: [DatabaseSeeder],
  migrations: ['src/database/typeorm/migrations/*.ts'],
};

export const dataSource: DataSource = new DataSource(options);
