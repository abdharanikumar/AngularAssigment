import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListModule } from '../Book-list/book-list.module';

const collectionRoute: Routes = [
  { path: '', component: MycollectionsComponent }
];


@NgModule({
  declarations: [
    MycollectionsComponent
  ],
  imports: [
    CommonModule, // If you are making your own module ,should include this,
    RouterModule.forChild(collectionRoute),
    BookListModule
  ]
})
export class MycollectionsModule { }
