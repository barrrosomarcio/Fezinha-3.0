import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateGameTable1738712185000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'game',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'bola_1',
            type: 'smallint',
          },
          {
            name: 'bola_2',
            type: 'smallint',
          },
          {
            name: 'bola_3',
            type: 'smallint',
          },
          {
            name: 'bola_4',
            type: 'smallint',
          },
          {
            name: 'bola_5',
            type: 'smallint',
          },
          {
            name: 'bola_6',
            type: 'smallint',
          },
          {
            name: 'bola_7',
            type: 'smallint',
          },
          {
            name: 'bola_8',
            type: 'smallint',
          },
          {
            name: 'bola_9',
            type: 'smallint',
          },
          {
            name: 'bola_10',
            type: 'smallint',
          },
          {
            name: 'bola_11',
            type: 'smallint',
          },
          {
            name: 'bola_12',
            type: 'smallint',
          },
          {
            name: 'bola_13',
            type: 'smallint',
          },
          {
            name: 'bola_14',
            type: 'smallint',
          },
          {
            name: 'bola_15',
            type: 'smallint',
          },
          {
            name: 'acertos_11',
            type: 'smallint',
            default: 0,
          },
          {
            name: 'acertos_12',
            type: 'smallint',
            default: 0,
          },
          {
            name: 'acertos_13',
            type: 'smallint',
            default: 0,
          },
          {
            name: 'acertos_14',
            type: 'smallint',
            default: 0,
          },
          {
            name: 'acertos_15',
            type: 'smallint',
            default: 0,
          },
        ],
        uniques: [
          {
            name: 'UQ_game_combination',
            columnNames: [
              'bola_1',
              'bola_2',
              'bola_3',
              'bola_4',
              'bola_5',
              'bola_6',
              'bola_7',
              'bola_8',
              'bola_9',
              'bola_10',
              'bola_11',
              'bola_12',
              'bola_13',
              'bola_14',
              'bola_15',
            ],
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('game');
  }
}
