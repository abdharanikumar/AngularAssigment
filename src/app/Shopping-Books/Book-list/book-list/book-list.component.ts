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
}
