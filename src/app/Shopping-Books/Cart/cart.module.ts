import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { BookListModule } from '../Book-list/book-list.module';


const cartRoutes: Routes = [
  { path: '', component: CartComponent }
];


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,BookListModule,    
    RouterModule.forChild(cartRoutes),MaterialsModule,SharedModule,BookListModule
  ]
})
export class CartModule { }
