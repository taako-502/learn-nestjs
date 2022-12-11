import { Module } from '@nestjs/common';
import { HogeController } from './hoge.controller';
import { AppService } from './../app.service';
import { HogeService } from './hoge.service';

@Module({
    controllers: [HogeController],
    providers: [AppService, HogeService],
})
export class HogeModule {}
