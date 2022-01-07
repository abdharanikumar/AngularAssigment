import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../State/book.facade';
import { BookItem } from '../../State/Interface/book.Model';

@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.scss']
})
export class MycollectionsComponent implements OnInit {
  collectionBooks$!: Observable<BookItem[]>;

  constructor(private booksFacade: BooksFacade) { }
  
  ngOnInit() {
    this.collectionBooks$ = this.booksFacade.collectionBooks$;
  }
}
