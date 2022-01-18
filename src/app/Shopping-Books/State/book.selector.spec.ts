/* import { BooksState } from "./book.reducers";
import * as BookSelector from "./book.selector";
const booksArr : any = [
    {
      id: '1',
      title: 'title 1',
      subtitle: 'subtitle 1',
      description: 'des 1',
      authors: ['name'],
      imageLinks: { smallThumbnail: 'smallthumbnail', thumbnail: 'thumbnail' },
      averageRating: 5,
      publisher: 'publisher',
      pageCount: 10,
      language: 'en',
      billingName: 'name',
      billingAddress: 'address',
      billingEmail: 'test@test.com',
      billingPhone: '9999999999',
    },
  ];
const billingDetails = {
    id: '1',
    name: 'name',
    email: 'test@test.com',
    phone: '9999999999',
    address: 'address'
}
fdescribe("Selectors", () => {
  const initialState: BooksState = {
    loaded: false,
    cartItems: booksArr,
    collectionItems: booksArr,
    searchKey: 'mobile',
    list: booksArr,
    purchaseList: booksArr,
    ids: [],
    entities: undefined
  };

  fit("should select the booksList", () => {
      console.log('hello');
    const result = BookSelector.getBooks.projector(initialState.list);
    expect(result).toBe(initialState.list);
    //expect(result[0].id).toEqual("1");
  });

  /* it("should select the cartItemsList", () => {
    const result = BookSelector.cartItemsList.projector(
      initialState.books.cartItems
    );
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual("1");
  });
  it("should select the myCollectionItemsList", () => {
    const result = BookSelector.myCollectionItemsList.projector(
      initialState.books.myCollectionItems
    );
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual("1");
  }); */
//}); */
 
import { BookItem } from './Interface/book.Model';
import * as fromSelector from './book.selector';

describe('selector test', () => {
  const state : any = {
    list: [
      { id: '1' } as BookItem
    ],
    cartItems: [{ id: '1'} as BookItem],
    collectionItems: [{ id: '1' } as BookItem],
    purchaseList : [{ id: '1'} as BookItem]
  };
  describe('', () => {
    it('getBooks should return list of book details', () => {
      expect(fromSelector.getBooks.projector(state)).toEqual(state.list);      
    });
  });
  describe(
    'getCartItems selector should return cart list item',
    () => {
      it('getCartItems should return list of book details properly', () => {
        expect(fromSelector.getCartItems.projector(state)).toEqual(
          state.cartItems
        );
      });
    }
  );

  describe(
    'getPurchaseItems selector should return Purchase list item',
    () => {
      it('getPurchaseItems should return list of book details properly', () => {
        expect(fromSelector.getPurchaseItems.projector(state)).toEqual(
          state.purchaseList
        );
      });
    }
  );

  describe(
    'getCollectionItems selector should return Collection list item',
    () => {
      it('getCollectionItems should return list of book details properly', () => {
        expect(fromSelector.getCollectionItems.projector(delete state.collectionItems)).toEqual(
          state.collectionItems
        );
      });
    }
  );

  xdescribe(
    'getCartItemsCount selector should return items',
    () => {
      it('getCartItemsCount should return cart item list', () => {
        const expected : any = [{ id: '1'} as BookItem];
        expect(fromSelector.getCartItemsCount.projector(state)).toEqual(
          0
        );
      });
      
      it(
        'getCollectionItemsCount should return collection list count as 0' +
          'if no collectionitems list iself not present in state ',
        () => {
          expect(
            fromSelector.getCollectionItems.projector(
              delete state.collectionItems
            )
          ).toEqual(null);
        }
      );
    }
  );
});
