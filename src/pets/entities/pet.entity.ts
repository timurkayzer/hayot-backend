
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    excerpt: string;

    @Column({ default: false })
    adopted: boolean;

    @Column({ default: false })
    castrated: boolean;

    @Column()
    gender: string;

    @Column()
    size: string;

    @Column()
    age: number;

    @Column()
    weigth: number;

    @Column()
    height: number;
}