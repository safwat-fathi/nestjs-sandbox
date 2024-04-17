import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.dto';
import { ValidateIf } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ValidateIf((_, v) => v !== undefined)
  name?: string;

  @ValidateIf((_, v) => v !== undefined)
  email?: string;

  @ValidateIf((_, v) => v !== undefined)
  password?: string;
}
