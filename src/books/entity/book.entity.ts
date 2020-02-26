import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameBook: string;

  @Column()
  aboutBook: string;

  @Column()
  imgURL: string;

  @Column({ default: true })
  isActive: boolean;
}
