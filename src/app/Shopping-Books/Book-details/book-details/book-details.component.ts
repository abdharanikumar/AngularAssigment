import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../State/Interface/book.Model';
import { ActivatedRoute , Params ,Router} from '@angular/router';
import { BookSearchService } from '../../Search/search.service';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../State/book.facade';
import { select, Store } from '@ngrx/store';
import * as selector from '../../State/book.selector';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  books!: Observable<BookItem[]>;
  userSelectedBook!: BookItem;
  bookId! : string;
  allBooks$!: Observable<BookItem[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store<selector.State>,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.bookId = params['id']);

    this.store.pipe(select(selector.getBooks)).subscribe((books)=>{
      this.userSelectedBook = books.find((book: BookItem) => {
        return book.id === this.bookId;
      });
    });
  }

  addToCart(book : BookItem){
    this.booksFacade.addBookToCart(book);
  }

  buyNow(book: BookItem){
    this.booksFacade.addBookToPurchaseListItems([book]);
    this.route.navigate(['billingdetails']);
  }

}
