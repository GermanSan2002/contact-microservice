import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateContactDto } from '../DTOs/create.contact.dto';
import { UpdateContactDto } from '../DTOs/update.contact.dto';
import { Contact } from '../entities/contact.entity';
import { ContactService } from '../services/contact.service';

@Controller('contacts')
@ApiTags('Contactos')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Post()
  @ApiBody({ type: CreateContactDto })
  @ApiResponse({ status: 201, description: 'Contacto creado correctamente', type: Contact })
  addContact(
    @Body() createContactDto: CreateContactDto,
    @Param('agendaId') agendaId: string,
  ) {
    return this.contactService.addContact(createContactDto, agendaId);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'ID del contacto' })
  @ApiBody({ type: UpdateContactDto })
  @ApiResponse({ status: 200, description: 'Contacto actualizado correctamente', type: Contact })
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactService.updateContact(id, updateContactDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID del contacto' })
  @ApiResponse({ status: 204, description: 'Contacto eliminado correctamente' })
  deleteContact(@Param('id') id: string) {
    return this.contactService.deleteContact(id);
  }

  @Get()
  @ApiParam({ name: 'agendaId', description: 'ID de la agenda' })
  @ApiResponse({ status: 200, description: 'Lista de contactos', type: [Contact] })
  getContacts(@Param('agendaId') agendaId: string) {
    return this.contactService.findContacts(agendaId);
  }
}