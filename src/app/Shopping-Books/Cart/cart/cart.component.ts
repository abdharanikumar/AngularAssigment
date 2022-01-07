import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { BooksFacade } from '../../State/book.facade';
import { BookItem } from '../../State/Interface/book.Model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartBooks$!: Observable<BookItem[]>;

  constructor(private route: Router,
              private booksFacade: BooksFacade) { }
              

  ngOnInit() {
    this.cartBooks$ = this.booksFacade.cartBooks$;
  }

  clearCartClicked(payload:BookItem){
    this.booksFacade.clearBookfromCart(payload);
  }

  purchaseClicked(books: BookItem[]){
    this.booksFacade.addBookToPurchaseListItems(books);
    this.route.navigate(['billingdetails']);
  }

}
