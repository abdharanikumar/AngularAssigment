import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BookListModule } from '../Book-list/book-list.module';
import { BookListComponent } from '../Book-list/book-list/book-list.component';
import { BookDetailsComponent } from '../Book-details/book-details/book-details.component';

const searchRoutes: Routes = [
  {
    path: '', component: SearchComponent, children: [
      {
        path: 'bookDetail/:id', component: BookDetailsComponent
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
