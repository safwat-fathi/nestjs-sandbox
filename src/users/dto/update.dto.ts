import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.dto';
import { IsNotEmpty, NotEquals, ValidateIf } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @NotEquals(null)
  @ValidateIf((_, v) => v !== undefined)
  name?: string;

  @IsNotEmpty()
  @NotEquals(null)
  @ValidateIf((_, v) => v !== undefined)
  email?: string;

  @IsNotEmpty()
  @NotEquals(null)
  @ValidateIf((_, v) => v !== undefined)
  password?: string;
}
