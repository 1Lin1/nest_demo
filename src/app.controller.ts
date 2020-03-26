import { Controller, Get } from '@nestjs/common';
import { ApiOperation,ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {

  @Get()
  index() {
    return 'index'
  }
}
