import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agenda } from '../entities/agenda.entity';
import { CreateAgendaDto } from '../DTOs/create.agenda.dto';
import { UpdateAgendaDto } from '../DTOs/update.agenda.dto';
import { AgendaRepository } from '../repositories/agenda.repository';

@Injectable()
export class AgendaService {
  constructor(
    @InjectRepository(AgendaRepository)
    private agendaRepository: AgendaRepository,
  ) {}

  async createAgenda(createAgendaDto: CreateAgendaDto): Promise<Agenda> {
    const agenda = new Agenda();
    agenda.name = createAgendaDto.name;
    return this.agendaRepository.save(agenda);
  }

  async getAgendaById(id: string): Promise<Agenda>{
    const agenda = await this.agendaRepository.findById(id);
    if (!agenda) {
      throw new NotFoundException(`Agenda with ID ${id} not found`);
    }
    return agenda;
  }

  async updateAgenda(id: string, updateAgendaDto: UpdateAgendaDto): Promise<Agenda> {
    const agenda = await this.agendaRepository.findById(id);
    if (!agenda) {
      throw new NotFoundException(`Agenda with ID ${id} not found`);
    }
    Object.assign(agenda, updateAgendaDto);
    return this.agendaRepository.save(agenda);
  }

  async deleteAgenda(id: string): Promise<boolean> {
    const result = await this.agendaRepository.delete(id);
    return result.affected === 1;
  }

  async findAgendas(): Promise<Agenda[]> {
    return this.agendaRepository.find();
  }
}