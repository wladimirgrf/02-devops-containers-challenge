import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/tests')
  async list(): Promise<any> {
    return this.appService.list();
  }

  @Post('/tests')
  async create(): Promise<void> {
    await this.appService.create();
  }
}
