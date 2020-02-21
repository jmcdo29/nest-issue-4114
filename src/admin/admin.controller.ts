import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {

  @Get()
  get() {
    return 'admin get';
  }
}
