import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAgendaDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'German',
    description: 'The agenda name',
  })
  name?: string; 
}