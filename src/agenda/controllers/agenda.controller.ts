import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { ApiTags, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateAgendaDto } from '../DTOs/create.agenda.dto';
import { UpdateAgendaDto } from '../DTOs/update.agenda.dto';
import { AgendaService } from '../services/service.agenda';
import { Agenda } from '../entities/agenda.entity';


@Controller('agendas')
@ApiTags('Agendas')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  @ApiBody({ type: CreateAgendaDto })
  @ApiResponse({ status: 201, description: 'Agenda creada correctamente', type: Agenda })
  createAgenda(@Body() createAgendaDto: CreateAgendaDto) {
    return this.agendaService.createAgenda(createAgendaDto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'ID de la agenda' })
  @ApiBody({ type: UpdateAgendaDto })
  @ApiResponse({ status: 200, description: 'Agenda actualizada correctamente', type: Agenda })
  updateAgenda(@Param('id') id: string, @Body() updateAgendaDto: UpdateAgendaDto) {
    return this.agendaService.updateAgenda(id, updateAgendaDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID de la agenda' })
  @ApiResponse({ status: 204, description: 'Agenda eliminada correctamente' })
  deleteAgenda(@Param('id') id: string) {
    return this.agendaService.deleteAgenda(id);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de agendas', type: [Agenda] })
  getAgendas() {
    return this.agendaService.findAgendas();
  }
}