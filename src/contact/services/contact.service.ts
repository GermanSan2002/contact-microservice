import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactRepository } from '../repositories/contact.repository';
import { AgendaService } from '../../agenda/services/service.agenda';
import { Contact } from '../entities/contact.entity';
import { UpdateContactDto } from '../DTOs/update.contact.dto';
import { CreateContactDto } from '../DTOs/create.contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactRepository)
    private contactRepository: ContactRepository,
    private agendaService: AgendaService,
  ) {}

  async addContact(
    createContactDto: CreateContactDto,
    agendaId: string,
  ): Promise<Contact> {
    const agenda = await this.agendaService.getAgendaById(agendaId);
    if (!agenda) {
      throw new NotFoundException(`Agenda with ID ${agendaId} not found`);
    }

    const contact = new Contact();
    contact.name = createContactDto.name;
    contact.phone = createContactDto.phone
    contact.agenda = agenda;
    
    return this.contactRepository.save(contact);
  }

  async updateContact(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }

    Object.assign(contact, updateContactDto);
    return this.contactRepository.save(contact);
  }

  async deleteContact(id: string): Promise<boolean> {
    const result = await this.contactRepository.delete(id);
    return result.affected === 1;
  }

  async findContacts(agendaId: string): Promise<Contact[]> {
    return this.contactRepository.find({ where: { agenda: { id: agendaId } } });
  }
}