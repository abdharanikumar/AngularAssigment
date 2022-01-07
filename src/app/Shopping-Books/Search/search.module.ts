import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { MatInputModule } from '@angular/material/input';
import { BookListModule } from '../Book-list/book-list.module';
import { BookDetailsComponent } from '../Book-details/book-details/book-details.component';

const searchRoutes: Routes = [
  {
    path: '', component: SearchComponent, children: [
      {
        path: 'bookdetail/:id', component: BookDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    BookDetailsComponent,SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,SharedModule,MatInputModule ,
    RouterModule.forChild(searchRoutes),
    BookListModule
  ]
})
export class SearchModule { }
