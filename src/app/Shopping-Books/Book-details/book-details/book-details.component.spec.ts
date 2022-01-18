/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BooksFacade } from '../../State/book.facade';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { shopBooksReducer } from '../../State/book.reducers';
import { BookSearchService } from '../../Search/search.service';
import { BookItem } from '../../State/Interface/book.Model';
import { concat, of, throwError } from 'rxjs';
import { BookDetailsComponent } from './book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListModule } from '../../Book-list/book-list.module';
import { SearchModule } from '../../Search/search.module';
import { RouterTestingModule } from '@angular/router/testing';

import * as BookSelector from '../../State/book.selector';
import * as BookReducer from '../../State/book.reducers';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { createFeatureSelector,StoreModule, MemoizedSelector } from '@ngrx/store';
import { reducers } from '../../State/Index';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let bookFacade: BooksFacade;
  let router: Router;
  let mockStore: MockStore;

  const dummyData : any = {
    kind: 'books#volume',
    id: 'nHnOERqf-MQC',
    etag: 'xWK/AG8XgaM',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
    volumeInfo: {
      title: 'India',
      authors: ['Stanley A. Wolpert'],
      publisher: 'Univ of California Press',
      publishedDate: '1999-01-01',
      description:
        '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0520221729',
        },
        {
          type: 'ISBN_13',
          identifier: '9780520221727',
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 273,
      printType: 'BOOK',
      categories: ['History'],
      averageRating: 3.5,
      ratingsCount: 4,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.5.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
      infoLink:
        'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
    },
    saleInfo: {
      country: 'IN',
      saleability: 'NOT_FOR_SALE',
      isEbook: false,
    },
    accessInfo: {
      country: 'IN',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
    },
  };

  const initialState : any = [
    {
      kind: 'books#volume',
      id: '6JVCAwAAQBAJ',
      etag: 'hlStCIjV/uI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ',
      volumeInfo: {
        title: 'Object Thinking',
        authors: ['David West'],
        publisher: 'Microsoft Press',
        publishedDate: '2004-02-11',
        description:
          'In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.',
        readingModes: { text: true, image: true },
        pageCount: 368,
        printType: 'BOOK',
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '3.6.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 2064.52, currencyCode: 'INR' },
        retailPrice: { amount: 929.03, currencyCode: 'INR' },
        buyLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: { amountInMicros: 2064520000, currencyCode: 'INR' },
            retailPrice: { amountInMicros: 929030000, currencyCode: 'INR' },
          },
        ],
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: { isAvailable: false },
        pdf: { isAvailable: false },
        webReaderLink:
          'http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;...',
      },
      type: '[Cart] Add To Cart',
    },
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule,
        HttpClientTestingModule,            
        MaterialsModule,SharedModule,BookListModule        
      ],
      providers: [BooksFacade,HttpClient,provideMockStore({
        initialState,
      }),{ provide: Router, useValue: { navigate: () => {} } }],
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BooksFacade);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  xit('should return same description if character length is larger than 120', () => {
    component.userSelectedBook = {
      volumeInfo: {
        description:
          'desc',
      },
    } as BookItem;
    const funcCall = component.description;
    expect(funcCall).toBe(component.userSelectedBook.volumeInfo.description);
  });




 /*  xit('should call ngOnInit method', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
  }); */

  
  /* xdescribe('test getters on component', () => {
    beforeEach(() => {
      fixture.userSelectedBook = bookMock;
    });

    it('get title', () => {
      expect(fixture.title).toBe(bookMock.volumeInfo.title);
    });

    it('get Image', () => {
      expect(fixture.image).toBe(bookMock.volumeInfo.imageLinks.smallThumbnail);
    })

    it('get description', () => {
      expect(fixture.description).toBe(bookMock.volumeInfo.description);
    });

    it('get autors', () => {
      expect(fixture.publisher).toBe(bookMock.volumeInfo.publisher);
    })
  }) */

 /*  it('should add Book to cart when Add to cart clicked', ()=>{    
    const dispatchSpy = spyOn(bookFacade,'addBookToCart');
    component.addToCart(dummyData);
    expect(dispatchSpy).toHaveBeenCalledWith(dummyData);
  });
  
  it('should add billing details to collection when form is valid', ()=>{    
    const dispatchSpy = spyOn(bookFacade,'addBookToPurchaseListItems');
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.buyNow(dummyData);
    expect(dispatchSpy).toHaveBeenCalledWith([dummyData]);
  });
  
  it('should call navigatebyURl function when buynow clicked', () => {
    const url = 'billingdetails';
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.buyNow(dummyData);
    expect(router.navigate).toHaveBeenCalledWith([url]);
  }); */

//});*/
 