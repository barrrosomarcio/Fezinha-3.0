import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1727618814334 implements MigrationInterface {
  name = 'Migrations1727618814334';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "concurso_lotofacil" (
                "concurso" smallint NOT NULL,
                "dataSorteio" TIMESTAMP NOT NULL,
                "bola1" smallint NOT NULL,
                "bola2" smallint NOT NULL,
                "bola3" smallint NOT NULL,
                "bola4" smallint NOT NULL,
                "bola5" smallint NOT NULL,
                "bola6" smallint NOT NULL,
                "bola7" smallint NOT NULL,
                "bola8" smallint NOT NULL,
                "bola9" smallint NOT NULL,
                "bola10" smallint NOT NULL,
                "bola11" smallint NOT NULL,
                "bola12" smallint NOT NULL,
                "bola13" smallint NOT NULL,
                "bola14" smallint NOT NULL,
                "bola15" smallint NOT NULL,
                "ganhadores15" int NOT NULL,
                "rateio15" money NOT NULL,
                "ganhadores14" int NOT NULL,
                "rateio14" money NOT NULL,
                "ganhadores13" int NOT NULL,
                "rateio13" money NOT NULL,
                "ganhadores12" int NOT NULL,
                "rateio12" money NOT NULL,
                "ganhadores11" int NOT NULL,
                "rateio11" money NOT NULL,
                "acumulado" money NOT NULL,
                "arrecadacaoTotal" money NOT NULL,
                "estimativaProximoPremio" money NOT NULL,
                "acumuladoEspecial" money NOT NULL,
                CONSTRAINT "pk_concurso_lotofacil" PRIMARY KEY ("concurso")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "concurso_lotofacil"
        `);
  }
}
