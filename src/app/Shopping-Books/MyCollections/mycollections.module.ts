import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListModule } from '../Book-list/book-list.module';

const collectionRoute: Routes = [
  { path: 'myCollections', component: MycollectionsComponent }
];


@NgModule({
  declarations: [
    MycollectionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(collectionRoute),
    BookListModule
  ]
})
export class MycollectionsModule { }
