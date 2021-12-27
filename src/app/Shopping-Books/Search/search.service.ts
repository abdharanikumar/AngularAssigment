import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book, BookItem } from '../State/Book.Model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }
  

  getBooks(title: string): Observable<BookItem[]> {
    return this.http
      .get<Book>(this.booksUrl+title)
      .pipe(map((data: Book) => data.items));
  }

}
