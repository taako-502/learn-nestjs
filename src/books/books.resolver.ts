import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { books } from '../entities/book.entity';
import { BooksService } from './books.service';
import { newBookInput } from './dto/newBook.input';

@Resolver((of) => books)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query((returns) => [books])
  books(): Promise<books[]> {
    return this.booksService.findAll();
  }

  @Query((returns) => books)
  async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation((returns) => books)
  addBook(@Args('newBook') newBook: newBookInput): Promise<books> {
    return this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}
