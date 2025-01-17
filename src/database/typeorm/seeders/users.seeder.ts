import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { readSqlSeederFile } from '@/database/typeorm/utils';

export class UsersSeeder implements Seeder {
  track: boolean;

  async run(dataSource: DataSource): Promise<any> {
    const queryUp: string = readSqlSeederFile('users.sql');

    await dataSource.query(queryUp);
  }
}
