import { Get, Injectable, Param, ParseUUIDPipe } from '@nestjs/common';

@Injectable()
export class UsersService {
  @Get(':uuid')
  findOne(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
    console.log(uuid);

    return {} as any;
  }
}
