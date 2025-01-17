import { Repository } from 'typeorm';
import { Agenda } from '../entities/agenda.entity';

export class AgendaRepository extends Repository<Agenda> {
  async findByName(name: string): Promise<Agenda | undefined> {
    return this.findOne({ where: { name } });
  }

  async findById(id: string): Promise<Agenda | undefined> {
    return this.findOne({ where: { id } });
  }
}