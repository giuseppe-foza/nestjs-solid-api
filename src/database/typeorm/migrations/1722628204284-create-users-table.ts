import { MigrationInterface, QueryRunner } from 'typeorm';
import { readSqlMigrationFile } from '../utils';

export class CreateUsersTable1722628204284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryUp: string = readSqlMigrationFile(
      '1722628204284-create-users-table.sql',
    );

    await queryRunner.query(queryUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
