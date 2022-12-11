import { Controller } from '@nestjs/common';

@Controller( 'hoge' )
export class HogeController {
    async hoge(): Promise<string> {
        return 'hoge';
    }
}