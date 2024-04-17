import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
  IsString,
  NotEquals,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
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
