import { Book } from './book.entity';

describe('Book', () => {
  it('should be defined', () => {
    expect(new Book()).toBeDefined();
  });
});
