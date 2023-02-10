import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  generateError() {
    throw new HttpException('Forbidden to fetch /', HttpStatus.FORBIDDEN);
  }
}
