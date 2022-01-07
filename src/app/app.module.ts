import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialsModule} from './materials/materials.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookSearchService } from './Shopping-Books/Search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { shopBooksReducer } from './Shopping-Books/State/book.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BooksFacade } from './Shopping-Books/State/book.facade';
import { BooksModule } from './Shopping-Books/State/book.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    SharedModule ,
    HttpClientModule,
    BooksModule,
    StoreModule.forRoot(shopBooksReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'BookShopping'})
  ],
  providers: [BookSearchService,BooksFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
