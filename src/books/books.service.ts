import { Injectable } from '@nestjs/common';
import { Book } from './book';
import { newBookInput } from './dto/newBook.input';

let books = [
  {
    id: 1,
    title: 'test 1',
    author: 'Joe',
    price: 1000,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'test 2',
    author: 'Maria',
    price: 2000,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'test 3',
    author: 'Smith',
    price: 3000,
    createdAt: new Date(),
  },
] as Book[];

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  findOneById(id: number): Promise<Book> {
    const book = books.find((book) => book.id === id);
    return Promise.resolve(book);
  }

  create(data: newBookInput): Promise<Book> {
    const book: Book = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    };
    books.push(book);

    return Promise.resolve(book);
  }

  async remove(id: number): Promise<boolean> {
    books = books.filter((book) => book.id !== id);
    return true;
  }
}