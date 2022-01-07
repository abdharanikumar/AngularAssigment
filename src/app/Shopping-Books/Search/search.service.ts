import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { BookItem } from '../State/Interface/book.Model';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  private  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }
   
  getBooks(value: string) {
    return this.http.get<{ items: BookItem[] }>(this.booksUrl+value);;
  }
}
