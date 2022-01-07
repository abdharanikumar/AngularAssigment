import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as Booksreducer from './book.reducers';
import { BooksState } from './book.reducers';

export interface State extends EntityState<BooksState> {}


const getBookFeatureState = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.list
);


export const getCartItems = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.cartItems
);


export const getCollectionItems = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.collectionItems
);

export const getCartItemsCount = createSelector(
  // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.cartItems.length
);

export const getPurchaseItems = createSelector( // you need to export the create selector in order to utilize in components
  getBookFeatureState,
  (state: BooksState) => state.purchaseList
);
