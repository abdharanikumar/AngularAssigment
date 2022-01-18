import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from '../../State/Interface/book.Model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()  book!: BookItem;
  
  constructor() { }
  ngOnInit() {
  }


  get title(): string {
    return this.book.volumeInfo.title;
  }

  get image(): string {
    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }
  get publisher(): string {
    return this.book.volumeInfo.publisher;
  }

}
