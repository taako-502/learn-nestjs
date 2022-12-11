import { Controller } from '@nestjs/common';

@Controller( 'hoge' )
export class Hoge {
    async hoge(): Promise<string> {
        return 'hoge';
    }
}