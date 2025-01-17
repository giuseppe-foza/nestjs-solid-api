import { MigrationInterface, QueryRunner } from 'typeorm';
import { readSqlMigrationFile } from '../utils';

export class CreateGroupsTable1722628204280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryUp: string = readSqlMigrationFile(
      '1722628204280-create-groups-table.sql',
    );

    await queryRunner.query(queryUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
