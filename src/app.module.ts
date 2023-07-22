import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { config } from 'dotenv'

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Module
import { BooksModule } from './books/books.module';
import { TaskModule } from './task/task.module';
import { HogeModule } from './hoge/hoge.module';

import { Task } from './entities/task.entity';
import { PrismaService } from './prisma.service';

config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Task],
      synchronize: true,
      dropSchema: false, //データベースの初期化有無
    }),
    BooksModule,
    TaskModule,
    HogeModule,
  ],
  controllers: [AppController],
  providers: [AppService, /* PrismaService */],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
