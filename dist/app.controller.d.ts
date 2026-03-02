import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getClass(): string;
    getWelcome(): string;
    tambah(): number;
}
