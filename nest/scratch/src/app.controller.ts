import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return 'Hello, world!';
    }

    @Get('hello')
    getHelloRoute() {
        return 'Hello from /hello route!';
    }

    @Get('goodbye')
    getGoodbyeRoute() {
        return 'Goodbye from /goodbye route!';
    }
}