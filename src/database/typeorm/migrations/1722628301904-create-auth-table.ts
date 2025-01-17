import { MigrationInterface, QueryRunner } from 'typeorm';
import { readSqlMigrationFile } from '../utils';

export class CreateAuthTable1722628301904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryUp: string = readSqlMigrationFile(
      '1722628301904-create-auth-table.sql',
    );

    await queryRunner.query(queryUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
