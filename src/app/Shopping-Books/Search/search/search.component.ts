import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../State/book.facade';
import { BookItem } from '../../State/Interface/book.Model';
import { BookSearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  books$!: Observable<BookItem[]>;

  constructor(private router: Router,
    private booksFacade: BooksFacade) { }

  ngOnInit(): void {
    this.books$ = this.booksFacade.books$;
  }

  OnSearchBtnClicked(): void{
    this.booksFacade.loadAllBooks(this.searchValue);
  }

  OnBookSelected(id:string){
    this.router.navigate(['/bookdetail',id]);
  }
}
