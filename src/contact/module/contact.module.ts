import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../entities/contact.entity';
import { ContactService } from '../services/contact.service';
import { Agenda } from '../../agenda/entities/agenda.entity';
import { ContactController } from '../controllers/contact.controller';
import { ContactRepository } from '../repositories/contact.repository';
import { AgendaModule } from '../../agenda/module/agenda.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, Agenda]), AgendaModule],
  providers: [ContactService, ContactRepository],
  controllers: [ContactController],
})
export class ContactModule {}