import { runSeeder, Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { UsersSeeder } from '@/database/typeorm/seeders/users.seeder';

export class DatabaseSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, UsersSeeder);
  }
}
