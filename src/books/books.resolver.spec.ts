import { Test, TestingModule } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { books } from 'src/entities/book.entity';

describe('BooksResolver', () => {
  let resolver: BooksResolver;

  beforeEach(async () => {
    const mockRepository = {
      books: jest.fn(),
      getBook: jest.fn(),
      addBook: jest.fn(),
      removeBook: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksResolver,
        BooksService,
        {
          provide: getRepositoryToken(books),
          useValue: mockRepository,
        },
      ],
    }).compile();

    resolver = module.get<BooksResolver>(BooksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
