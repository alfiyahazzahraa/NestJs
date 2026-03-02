import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string { 
    return 'Welcome to Library API';
  }
  getHello(): string{
    return 'XI RPL 3';
  }

  tambah(a: number, b: number): number {
    return a + b;
  }
}
