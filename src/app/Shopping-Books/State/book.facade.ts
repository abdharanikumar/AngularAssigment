import { Injectable } from '@angular/core';
import * as BookSelector from './book.selector';
import * as BookReducer from './book.reducers';
import * as BookActions from './book.actions';
import {  BookItem } from './Interface/book.Model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';



@Injectable()
export class BooksFacade {

  //selecting from store 
  
  books$ = this.store.pipe(select(BookSelector.getBooks)) as Observable<BookItem[]>;
  cartBooks$ = this.store.pipe(select(BookSelector.getCartItems)) as Observable<BookItem[]>;
  collectionBooks$ =  this.store.pipe(select(BookSelector.getCollectionItems)) as Observable<BookItem[]>;
  cartItemsCount$ = this.store.pipe(select(BookSelector.getCartItemsCount)) as Observable<number>;
  purchaseListItems$ = this.store.pipe(select(BookSelector.getPurchaseItems)) as Observable<BookItem[]>;

  constructor(
    private store: Store<BookReducer.State>,
  ) { }

  //Dispatching actions

  loadAllBooks(searchValue:string) {
    this.store.dispatch(BookActions.LoadBooks({payload :searchValue}));
  }

  addBookToCollections(payload: BookItem[], purchaseInfo: object){
    const x = {payload ,purchaseInfo};
    this.store.dispatch(BookActions.AddBookToCollections(x));
  }

  clearBookfromCart(payload: BookItem){
    this.store.dispatch(BookActions.DeleteBookFromCart({payload}));
  }

  addBookToCart(book: BookItem){
    this.store.dispatch( BookActions.AddBookToCart({payload : book}));
  }

  addBookToPurchaseListItems(books : BookItem[]){
    this.store.dispatch( BookActions.AddBookToPurchaseList({payload : books}));
  }
  
}



