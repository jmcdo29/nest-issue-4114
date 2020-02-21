import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {

  @Get()
  get() {
    return 'api get';
  }
}
