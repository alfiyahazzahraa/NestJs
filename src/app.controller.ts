import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Hello')
  getHello(): string {
    return "Hello Backend Library!";
  }

  @Get('Class')
  getClass(): string {
    return "XI RPL 3";
  }

  @Get('Welcome')
    getWelcome(): string {
      return "Welcome backend library";
    }

    @Get('tambah')
      tambah():number{
        return this.appService.tambah(15,5)
      }
}
