import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from '../../State/Book.Model';

@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.scss']
})
export class MycollectionsComponent implements OnInit {
  collectionBooks$!: Observable<BookItem[]>;

  constructor() { }

  ngOnInit() {
  }

}
