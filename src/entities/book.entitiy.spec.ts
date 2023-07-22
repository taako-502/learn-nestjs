import { books } from './book.entity';

describe('Book', () => {
  it('should be defined', () => {
    expect(new books()).toBeDefined();
  });
});
