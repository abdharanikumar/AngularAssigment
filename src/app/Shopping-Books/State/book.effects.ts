import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import * as LoadBooks from './book.actions';
import { BookSearchService } from '../Search/search.service';
import { Actions, ofType , createEffect} from '@ngrx/effects';
import * as bookActions from './book.actions';

@Injectable()
export class BooksEffects {

  constructor(private searchService: BookSearchService,
              private actions$: Actions) { }

  // @Effect()
  loadProducts$ = createEffect(() => 
  this.actions$.pipe(
    ofType(bookActions.LoadBooks),
    mergeMap((action$) =>
      this.searchService.getBooks(action$.payload).pipe(
        map((responseData) =>
        LoadBooks.LoadBooksSuccess({payload: responseData.items})
      ),
    catchError(error =>
      of(LoadBooks.LoadBooksFail({payload: error}))
      )
      )
)));
}