import { Controller, Get } from '@nestjs/common';

@Controller( 'hoge' )
export class HogeController {
    @Get()
    async hoge(): Promise<string> {
        return 'hoge';
    }
}