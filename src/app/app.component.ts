import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BooksFacade } from './Shopping-Books/State/book.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cartItemsCount$!: Observable<number>;
  title="myapp";


  constructor(private booksFacade: BooksFacade) { 
  }

  ngOnInit() { 
    this.cartItemsCount$ = this.booksFacade.cartItemsCount$;
  } 
}
