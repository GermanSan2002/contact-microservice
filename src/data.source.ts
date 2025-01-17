import { ConfigModule, ConfigService } from '@nestjs/config';
import { Agenda } from 'src/agenda/entities/agenda.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: ['.env'],
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [Agenda, Contact],
  synchronize: true,
};

export const AppDS = new DataSource(DataSourceConfig);
