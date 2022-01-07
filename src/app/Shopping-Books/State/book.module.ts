import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './book.effects';
import { shopBooksReducer } from './book.reducers';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('books', shopBooksReducer),
        EffectsModule.forFeature([BooksEffects])
    ],
    declarations:[],
    providers:[],
    exports: [
    ],
})

export class BooksModule{

}