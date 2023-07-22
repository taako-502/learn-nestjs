import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { books } from 'src/entities/book.entity';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(books),
          useValue: {}, // Provide your custom mock here, or use a library like jest.mock()
        },
      ],
    }).compile();
  
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
