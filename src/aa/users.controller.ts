import {
  Query,
  Version,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Get()
  @Version('1')
  findAll(@Query('name') name: string, @Query('id') id: string) {
    console.log('🚀 ~ findAll ~ name:', name);
    console.log('🚀 ~ findAll ~ id:', id);
    // console.log(req.params);
    // console.log(req.query);

    if (name) return [name];

    return ['Adam', 'Eve', 'Jack', 'Jill', 'John'];
  }

  @Get()
  @Version('2')
  findAllV2() {
    return ['Safwat', 'Alaa'];
  }

  @Get(':uuid')
  findOne(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
    console.log(uuid);

    return 'Safwat';
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  @Delete()
  delete() {
    return 'User deleted';
  }
}
