import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameDataToDataSorteio1738710864341 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('concurso_lotofacil');
    const oldColumn = table.findColumnByName('dataSorteio');
    const newColumn = table.findColumnByName('data_sorteio');

    if (oldColumn && !newColumn) {
      await queryRunner.renameColumn('concurso_lotofacil', 'dataSorteio', 'data_sorteio');
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('concurso_lotofacil');
    const oldColumn = table.findColumnByName('data_sorteio');
    const newColumn = table.findColumnByName('dataSorteio');

    if (oldColumn && !newColumn) {
      await queryRunner.renameColumn('concurso_lotofacil', 'data_sorteio', 'dataSorteio');
    }
  }
}
