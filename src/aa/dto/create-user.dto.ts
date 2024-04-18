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
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  @NotEquals(null)
  readonly email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  @NotEquals(null)
  readonly password: string;
}
