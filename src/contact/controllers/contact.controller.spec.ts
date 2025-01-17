import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from '../services/contact.service';
import { CreateContactDto } from '../DTOs/create.contact.dto';
import { UpdateContactDto } from '../DTOs/update.contact.dto';
import { Contact } from '../entities/contact.entity';

describe('ContactController', () => {
  let controller: ContactController;
  let service: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        {
          provide: ContactService,
          useValue: {
            addContact: jest.fn((dto: CreateContactDto, agendaId: string) => ({
                id: '123',
                ...dto,
                agenda: { id: agendaId } // Simplified agenda object
              } as Contact)),
            updateContact: jest.fn((id: string, dto: UpdateContactDto) => ({
              id,
              ...dto,
            } as Contact)),
            deleteContact: jest.fn((id: string) => true),
            findContacts: jest.fn((agendaId: string) => [
              { id: '1', name: 'Contacto 1', agendaId },
              { id: '2', name: 'Contacto 2', agendaId },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<ContactController>(ContactController);
    service = module.get<ContactService>(ContactService);
  });

  // Test case for addContact
  it('should create a new contact', async () => {
    const createDto: CreateContactDto = { name: 'Juan Perez', phone: '+54 3876824698' }; 
    const agendaId = '1';
    const result = await controller.addContact(createDto, agendaId);
    expect(result).toEqual({ 
      id: '123', 
      name: 'Juan Perez', 
      phone: '+54 3876824698', 
      agenda: { id: agendaId } 
    }); 
    expect(service.addContact).toHaveBeenCalledWith(createDto, agendaId);
  });

  // Test case for updateContact
  it('should update an existing contact', async () => {
    const id = '1';
    const updateDto: UpdateContactDto = { name: 'Contacto Actualizado' };
    const result = await controller.updateContact(id, updateDto);
    expect(result).toEqual({ id, ...updateDto });
    expect(service.updateContact).toHaveBeenCalledWith(id, updateDto);
  });

  // Test case for deleteContact
  it('should delete a contact', async () => {
    const id = '1';
    const result = await controller.deleteContact(id);
    expect(result).toBe(true);
    expect(service.deleteContact).toHaveBeenCalledWith(id);
  });

  // Test case for getContacts
  it('should get all contacts for an agenda', async () => {
    const agendaId = '1';
    const result = await controller.getContacts(agendaId);
    expect(result).toEqual([
      { id: '1', name: 'Contacto 1', agendaId },
      { id: '2', name: 'Contacto 2', agendaId },
    ]);
    expect(service.findContacts).toHaveBeenCalledWith(agendaId);
  });
});