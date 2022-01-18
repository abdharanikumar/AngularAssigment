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
