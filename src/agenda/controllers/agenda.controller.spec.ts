import { Test, TestingModule } from '@nestjs/testing';
import { AgendaService } from '../services/service.agenda';
import { CreateAgendaDto } from '../DTOs/create.agenda.dto';
import { UpdateAgendaDto } from '../DTOs/update.agenda.dto';
import { Agenda } from '../entities/agenda.entity';
import { AgendaController } from './agenda.controller';

describe('AgendaController', () => {
  let controller: AgendaController;
  let service: AgendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaController],
      providers: [
        {
          provide: AgendaService,
          useValue: {
            createAgenda: jest.fn((dto: CreateAgendaDto) => ({ id: '1', ...dto } as Agenda)),
            updateAgenda: jest.fn((id: string, dto: UpdateAgendaDto) => ({ id, ...dto } as Agenda)),
            deleteAgenda: jest.fn((id: string) => true), 
            findAgendas: jest.fn(() => [
              { id: '1', name: 'Agenda 1' },
              { id: '2', name: 'Agenda 2' },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<AgendaController>(AgendaController);
    service = module.get<AgendaService>(AgendaService);
  });

  it('should create an agenda', async () => {
    const createDto: CreateAgendaDto = { name: 'Nueva Agenda' };
    const result = await controller.createAgenda(createDto);
    expect(result).toEqual({ id: '1', name: 'Nueva Agenda' });
    expect(service.createAgenda).toHaveBeenCalledWith(createDto);
  });

  it('should update an agenda', async () => {
    const id = '1';
    const updateDto: UpdateAgendaDto = { name: 'Agenda Actualizada' };
    const result = await controller.updateAgenda(id, updateDto);
    expect(result).toEqual({ id, ...updateDto });
    expect(service.updateAgenda).toHaveBeenCalledWith(id, updateDto);
  });

  it('should delete an agenda', async () => {
    const id = '1';
    const result = await controller.deleteAgenda(id);
    expect(result).toBe(true); // Assuming deleteAgenda returns true if successful
    expect(service.deleteAgenda).toHaveBeenCalledWith(id);
  });

  it('should get all agendas', async () => {
    const result = await controller.getAgendas();
    expect(result).toEqual([
      { id: '1', name: 'Agenda 1' },
      { id: '2', name: 'Agenda 2' },
    ]);
    expect(service.findAgendas).toHaveBeenCalled();
  });
});