import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    password : string;

    @AfterInsert()
    logInsert() {
        console.log(`User with ID ${this.id} has been inserted.`, this.email);
    }

    @AfterRemove()
    logRemove() {
        console.log(`User with ID ${this.id} has been removed.`, this.email);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`User with ID ${this.id} has been updated.`, this.email);
    }

}