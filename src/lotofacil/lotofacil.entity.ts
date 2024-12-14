import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('concurso_lotofacil')
export class ConcursoLotoFacilEntity {
  @PrimaryColumn({
    type: 'smallint',
    primaryKeyConstraintName: 'pk_concurso_lotofacil',
  })
  concurso: number;

  @Column({ type: 'timestamp' })
  dataSorteio: string;

  @Column({ type: 'smallint' })
  bola1: number;

  @Column({ type: 'smallint' })
  bola2: number;

  @Column({ type: 'smallint' })
  bola3: number;

  @Column({ type: 'smallint' })
  bola4: number;

  @Column({ type: 'smallint' })
  bola5: number;

  @Column({ type: 'smallint' })
  bola6: number;

  @Column({ type: 'smallint' })
  bola7: number;

  @Column({ type: 'smallint' })
  bola8: number;

  @Column({ type: 'smallint' })
  bola9: number;

  @Column({ type: 'smallint' })
  bola10: number;

  @Column({ type: 'smallint' })
  bola11: number;

  @Column({ type: 'smallint' })
  bola12: number;

  @Column({ type: 'smallint' })
  bola13: number;

  @Column({ type: 'smallint' })
  bola14: number;

  @Column({ type: 'smallint' })
  bola15: number;

  @Column({ type: 'int' })
  ganhadores15: number;

  @Column({ type: 'money' })
  rateio15: string;

  @Column({ type: 'int' })
  ganhadores14: number;

  @Column({ type: 'money' })
  rateio14: string;

  @Column({ type: 'int' })
  ganhadores13: number;

  @Column({ type: 'money' })
  rateio13: string;

  @Column({ type: 'int' })
  ganhadores12: number;

  @Column({ type: 'money' })
  rateio12: string;

  @Column({ type: 'int' })
  ganhadores11: number;

  @Column({ type: 'money' })
  rateio11: string;

  @Column({ type: 'money' })
  acumulado: string;

  @Column({ type: 'money' })
  arrecadacaoTotal: string;

  @Column({ type: 'money' })
  estimativaProximoPremio: string;

  @Column({ type: 'money' })
  acumuladoEspecial: string;
}
