import { Injectable } from '@nestjs/common';
import { books } from '../entities/book.entity';
import { newBookInput } from './dto/newBook.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(books)
    private booksRepostiory: Repository<books>,
  ) {}

  findAll(): Promise<books[]> {
    return this.booksRepostiory.find();
  }

  findOneById(id: number): Promise<books> {
    return this.booksRepostiory.findOne({ where: { id: id } });
  }

  async create(data: newBookInput): Promise<books> {
    const book = this.booksRepostiory.create(data);
    await this.booksRepostiory.save(book);
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepostiory.delete(id);
    return result.affected > 0;
  }
}
