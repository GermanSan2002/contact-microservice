import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'German',
    description: 'The contact name',
  })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '+54 3876834025',
    description: 'The contact phone',
  })
  phone?: string;
}