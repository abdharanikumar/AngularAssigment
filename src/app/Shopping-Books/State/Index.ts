import { ActionReducerMap } from '@ngrx/store';
import { shopBooksReducer } from './book.reducers';

export const reducers: ActionReducerMap<any> = {
    books : shopBooksReducer
}