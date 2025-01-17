import { Controller, Get } from '@nestjs/common';

interface IHello {
  status: string;
}

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): IHello {
    return { status: 'Ok' };
  }
}
