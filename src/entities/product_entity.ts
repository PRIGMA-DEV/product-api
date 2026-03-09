import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product_entity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  uuid: string;

  @Column({ type: 'int', default: 0 })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
