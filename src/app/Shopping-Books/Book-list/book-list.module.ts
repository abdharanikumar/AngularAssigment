import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { EllipsisModule } from 'ngx-ellipsis';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    EllipsisModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookListModule { }
