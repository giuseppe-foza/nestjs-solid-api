import { MigrationInterface, QueryRunner } from 'typeorm';
import { readSqlMigrationFile } from '../utils';

export class CreateDbStructure1722624100644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryUp: string = readSqlMigrationFile(
      '1722624100644-create-db-structure.sql',
    );

    await queryRunner.query(queryUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
