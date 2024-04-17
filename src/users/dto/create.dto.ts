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
  @NotEquals(null)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @NotEquals(null)
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  @NotEquals(null)
  password: string;
}
