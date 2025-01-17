import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAgendaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'German',
    description: 'The agenda name',
  })
  name: string;
}