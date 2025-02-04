import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('game')
@Unique([
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
])
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'smallint' })
  bola_1: number;

  @Column({ type: 'smallint' })
  bola_2: number;

  @Column({ type: 'smallint' })
  bola_3: number;

  @Column({ type: 'smallint' })
  bola_4: number;

  @Column({ type: 'smallint' })
  bola_5: number;

  @Column({ type: 'smallint' })
  bola_6: number;

  @Column({ type: 'smallint' })
  bola_7: number;

  @Column({ type: 'smallint' })
  bola_8: number;

  @Column({ type: 'smallint' })
  bola_9: number;

  @Column({ type: 'smallint' })
  bola_10: number;

  @Column({ type: 'smallint' })
  bola_11: number;

  @Column({ type: 'smallint' })
  bola_12: number;

  @Column({ type: 'smallint' })
  bola_13: number;

  @Column({ type: 'smallint' })
  bola_14: number;

  @Column({ type: 'smallint' })
  bola_15: number;

  @Column({ type: 'smallint', default: 0 })
  acertos_11: number;

  @Column({ type: 'smallint', default: 0 })
  acertos_12: number;

  @Column({ type: 'smallint', default: 0 })
  acertos_13: number;

  @Column({ type: 'smallint', default: 0 })
  acertos_14: number;

  @Column({ type: 'smallint', default: 0 })
  acertos_15: number;
}
