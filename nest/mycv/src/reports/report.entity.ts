import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class ReportEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    password : string;
}