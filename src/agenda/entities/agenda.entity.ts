import { Contact } from '../../contact/entities/contact.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Agenda {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Contact, contact => contact.agenda)
    contacts: Contact[];
}