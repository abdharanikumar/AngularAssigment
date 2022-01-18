import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BookSearchService } from './search.service';
import { BookItem } from '../State/Interface/book.Model';

describe('BooksService', () => {
  let service: BookSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(BookSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return books when getBooks called',() =>{
    const dummyData = {id:'1234567890'};
    const urlkey = "mobile";
    service
      .getBooks(urlkey)
      .subscribe((books: any) => {
        expect(books).toEqual(dummyData);
      });

    const request = httpMock.expectOne(
      `https://www.googleapis.com/books/v1/volumes?q=${urlkey}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
  })
  
});
