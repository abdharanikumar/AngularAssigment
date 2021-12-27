import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookItem } from '../../State/Book.Model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  books$!: Observable<BookItem[]>;

  constructor(private route: Router,private searchService:SearchService) { }

  ngOnInit(): void {    
  }


  searchBtnClicked(): void{
    this.books$ = this.searchService.getBooks(this.searchValue);
  }

  bookSelected(id:string){
    this.route.navigate(['/bookDetail',id]);
  }
}
