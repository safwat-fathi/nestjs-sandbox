import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
  IsString,
  ValidateIf,
  NotEquals,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsAlphanumeric()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  password: string;
}
