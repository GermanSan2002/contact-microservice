import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'German',
    description: 'The contact name',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '+54 3876834025',
    description: 'The contact number',
  })
  phone: string;
}