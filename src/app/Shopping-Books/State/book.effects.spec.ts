import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import * as BookActions from './book.actions';
import { BookSearchService } from '../Search/search.service';
import { BooksEffects } from './book.effects';

describe('Books Effects', () => {
    let effect;
    let actions: ReplaySubject<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            BookSearchService,
            provideMockStore({}),
            BooksEffects,
            provideMockActions(() => actions)
          ],
        }).compileComponents();
        effect = TestBed.get(BooksEffects);
    }));
    

    it('should call and execute addToCart method in facade', inject(
        [BookSearchService],
        (service: BookSearchService) => {
         actions =  new ReplaySubject(1);
        const spy = spyOn(service,'getBooks');
        const loadAction = {
            type: BookActions.LoadBooks,
            payload: {
              payload :'Angular'
            }
        };
        actions.next(loadAction);

        effect.loadProducts$.subscribe(result => {
           expect(BookActions.LoadBooksSuccess).toHaveBeenCalledWith(result);
           expect(spy).toHaveBeenCalledWith('Angular');
           console.log(result);
        },err => {
            expect(BookActions.LoadBooksFail).toHaveBeenCalledWith(err);
        });
    }));

});