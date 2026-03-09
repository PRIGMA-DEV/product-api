import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product_entity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  price: number;
}
