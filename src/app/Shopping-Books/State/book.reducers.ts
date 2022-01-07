import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { BookItem } from './Interface/book.Model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BooksActions from './book.actions';

export interface BooksState extends EntityState<BookItem> {
  list: [];
  cartItems: [];
  collectionItems: [];
  searchKey: string;
  loaded: boolean;
  purchaseList : [];
}

export const bookAdapter: EntityAdapter<BookItem> = createEntityAdapter<BookItem>({});

export const initialState: BooksState = bookAdapter.getInitialState({
  loaded: false,
  cartItems: [],
  collectionItems: [],
  searchKey: '',
  list: [],  
  purchaseList :[]
});

export interface BooksState {
  list: [];
  cartItems: [];
  collectionItems: [];
  searchKey: string;
  loaded: boolean;
  purchaseList : [];
}

const booksReducer = createReducer(
  initialState,
  on(BooksActions.LoadBooksSuccess, (state, { payload }) => {
    return Object.assign({
      ...state,
      loaded: true,
      searchKey: payload,
      list: payload,
    });
  }),
  
  on(BooksActions.LoadBooksFail, (state) => {
    return Object.assign({
      ...state,
      list: {},
    });
  }),

  on(BooksActions.AddBookToCart, (state, payload) => {
    return Object.assign({
      ...state,
      cartItems: [...state.cartItems, payload.payload],
    });
  }),

  on(BooksActions.DeleteBookFromCart, (state, {payload}) => {
    return Object.assign({
      ...state,
      cartItems: state.cartItems.filter((item:BookItem) => payload.id !== item.id),
    });
  }),

  on(BooksActions.AddBookToCollections, (state, { payload, purchaseInfo }) => {
    const newData : any = payload.map((item) =>
      Object.assign({}, item, { purchaseInfo: purchaseInfo[0] })
    );
    return Object.assign({
      ...state,
      collectionItems: state.collectionItems.concat(newData),
    });
  }),

  on(BooksActions.AddBookToPurchaseList, (state, payload) => {
    return Object.assign({
      ...state,
      purchaseList: payload.payload,
    });
  }),
  
);

export function shopBooksReducer(state: BooksState | undefined, action: Action) {
  return booksReducer(state, action);
}

