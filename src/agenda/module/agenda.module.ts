import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from '../entities/agenda.entity';
import { AgendaService } from '../services/service.agenda';
import { AgendaController } from '../controllers/agenda.controller';
import { AgendaRepository } from '../repositories/agenda.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Agenda])],
  providers: [AgendaService, AgendaRepository],
  controllers: [AgendaController],
  exports: [AgendaService]
})
export class AgendaModule {}