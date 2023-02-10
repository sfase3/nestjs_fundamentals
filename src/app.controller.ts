import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  generateException() {
    throw new HttpException('Forbidden to fetch /', HttpStatus.FORBIDDEN);
  }
}
