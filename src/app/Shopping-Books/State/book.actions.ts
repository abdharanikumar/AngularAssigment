import { createAction , props} from '@ngrx/store';
import { BookItem } from './Interface/book.Model';

export const LoadBooks = createAction('[Books Loaded] Load Book',props<{ payload: string }>());
export const LoadBooksSuccess = createAction('[Books Loaded Successfully] Load Book Success', props<{ payload: BookItem[] }>());
export const LoadBooksFail = createAction('[Books Load Failed] Load Book Failure', props<{ payload: string }>());
export const AddBookToCart = createAction('[Book Added To Cart] Add Book To Cart', props<{ payload: BookItem }>());
export const DeleteBookFromCart = createAction('[Book Removed To Cart] Removed Book From Cart', props<{ payload: BookItem }>());
export const AddBookToCollections = createAction('[Book Added To Collections] Add Book To Collections', props<{  payload: BookItem[], purchaseInfo }>());
export const AddBookToPurchaseList = createAction('[Book Added To Purchase List] Add Book To PurchaseList', props<{  payload: BookItem[]}>());
