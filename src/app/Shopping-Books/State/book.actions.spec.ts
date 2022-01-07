import * as fromBook from './book.actions';

describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBook.LoadBooks({payload:''}).type).toBe('[Books Loaded] Load Book');
  });
});
