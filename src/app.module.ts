import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DataSourceConfig } from './data.source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from './agenda/entities/agenda.entity';
import { Contact } from './contact/entities/contact.entity';
import { AgendaModule } from './agenda/module/agenda.module';
import { ContactModule } from './contact/module/contact.module';
import { AgendaService } from './agenda/services/service.agenda';
import { AgendaController } from './agenda/controllers/agenda.controller';
import { ContactService } from './contact/services/contact.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el ConfigModule esté disponible en todo el proyecto sin necesidad de importarlo en cada módulo
      envFilePath: '.env', // Especifica la ruta al archivo .env
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    TypeOrmModule.forFeature([Agenda, Contact]),
    AgendaModule,
    ContactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
