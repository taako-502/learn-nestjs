import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { DataSource } from 'typeorm';
import { join } from 'path';

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver } from '@nestjs/apollo';

// Module
import { BooksModule } from './books/books.module';
import { TaskModule } from './task/task.module';
import { HogeModule } from './hoge/hoge.module';

import { Task } from './entities/task.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'learn-nestjs-db-server',
      port: 3306,
      username: 'user',
      password: 'pwd',
      database: 'test',
      entities: [Task],
      synchronize: true,
      dropSchema: false, //データベースの初期化有無
    }),
    BooksModule,
    TaskModule,
    HogeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
