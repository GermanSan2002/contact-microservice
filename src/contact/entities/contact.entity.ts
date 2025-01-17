import { Agenda } from '../../agenda/entities/agenda.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    phone: string;

    @ManyToOne(() => Agenda, agenda => agenda.contacts)
    agenda: Agenda;
}