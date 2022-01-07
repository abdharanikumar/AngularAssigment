import { Injectable } from '@angular/core';
import * as ReducerBook from './book.selector';
import * as BookActions from './book.actions';
import {  BookItem } from './Interface/book.Model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';



@Injectable()
export class BooksFacade {

  //selecting from store 
  
  books$ = this.store.pipe(select(ReducerBook.getBooks)) as Observable<BookItem[]>;
  cartBooks$ = this.store.pipe(select(ReducerBook.getCartItems)) as Observable<BookItem[]>;
  collectionBooks$ =  this.store.pipe(select(ReducerBook.getCollectionItems)) as Observable<BookItem[]>;
  cartItemsCount$ = this.store.pipe(select(ReducerBook.getCartItemsCount)) as Observable<number>;
  purchaseListItems$ = this.store.pipe(select(ReducerBook.getPurchaseItems)) as Observable<BookItem[]>;

  constructor(
    private store: Store<ReducerBook.State>,
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



