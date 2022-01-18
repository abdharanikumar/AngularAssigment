import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../State/Interface/book.Model';
import { ActivatedRoute , Params ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../State/book.facade';
import { select, Store } from '@ngrx/store';
import * as BookReducer from '../../State/book.reducers';
import * as BookSelector from '../../State/book.selector';


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
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.bookId = params['id']);

    this.booksFacade.books$.subscribe((books)=>{
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

  get title(): string {
    return this.userSelectedBook?.volumeInfo?.title;
  }

  get thumbnail(): string {
    return this.userSelectedBook?.volumeInfo?.imageLinks?.thumbnail;
  }

  get averageRating(): number {
    return this.userSelectedBook?.volumeInfo?.averageRating;
  }

  get publisher(): string {
    return this.userSelectedBook.volumeInfo.publisher;
  }

  get pageCount(): number {
    return this.userSelectedBook?.volumeInfo?.pageCount;
  }

  get language(): string {
    return this.userSelectedBook.volumeInfo.language;
  }
  
  get description(): string {
    return this.userSelectedBook.volumeInfo.description;
  }

  get authors(): string {
    return this.userSelectedBook.volumeInfo.authors.toString();
  }

}
