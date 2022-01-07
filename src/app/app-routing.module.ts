import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
        {
          path: '',
          loadChildren: () =>
          import('./Shopping-Books/Search/search.module').then(m => m.SearchModule)
        },
        {
          path: 'billingdetails',
          loadChildren: () =>
            import('./Shopping-Books/Billing-details/billing-details.module').then(m => m.BillingDetailsModule)
        },
        {
            path: 'cart',
            loadChildren: () =>
              import('./Shopping-Books/Cart/cart.module').then(m=> m.CartModule)
        },
        {
          path: 'mycollections',
          loadChildren: () =>
            import('./Shopping-Books/MyCollections/mycollections.module').then(m=> m.MycollectionsModule)
        },
        {
            path: 'booklist',
            loadChildren: () =>
              import('./Shopping-Books/Book-list/book-list.module').then(m => m.BookListModule)
        },
        { path: '**', component: PagenotfoundComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
