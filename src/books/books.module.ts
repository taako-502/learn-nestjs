import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { books } from '../entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([books])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
