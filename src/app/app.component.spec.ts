import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { createFeatureSelector, MemoizedSelector, StoreModule } from '@ngrx/store';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';

import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { BooksFacade } from './Shopping-Books/State/book.facade';
import { reducers } from './Shopping-Books/State/Index';
import * as BookReducer from '../app/Shopping-Books/State/book.reducers';
import * as BookSelector from '../app/Shopping-Books/State/book.selector';
import * as BookActions from '../app/Shopping-Books/State/book.actions';
import { BookSearchService } from './Shopping-Books/Search/search.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let bookFacade: BooksFacade;
  let mockStore: MockStore;

  const initialState = [
    {
      kind: 'books#volume',
      id: 'A1QoDwAAQBAJ',
      etag: 'hlStCIjV/uI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/A1QoDwAAQBAJ',
      volumeInfo: {
        title: 'Mastering React Native',
        authors: ['Eric Masiello'],
        publisher: 'Packt Publishing Ltd',
        publishedDate: '2014-02-11',
        description:
          'This book will show you how to apply JavaScript and other front-end skills to build cross-platform React Native applications for iOS and Android using a single codebase.\u003c/p\u003e\u003cp\u003eThis book will provide you with all the React Native building blocks necessary to become an expert. We ll give you a brief explanation of the numerous native components and APIs that come bundled with React Native including Images, Views, ListViews, WebViews, and much more. You will learn to utilize form inputs in React Native.',
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
            'http://books.google.com/books/publisher/content?id=A1QoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE737mmB4AFha1Jx1_6kMFNiw8LZmrLpyAWw4hoKYUvZ6GRAgJpM96j-NyZi0UWjEIEKzdUjeZ_lhomjF2N_PSpCm3Epyx7bCMDLFbTUZXmciHVnTIEf3Y5n93VZoyttIJc0dXVqO&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/publisher/content?id=A1QoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73CrjGO22wMjyr-ggK2AOWMspprec6GOdKGl_jwP6F_Qyc4ew8ADU42E4jA4fh2KI4giZRzrJw5ud2sjp2KpM5SWur5lgyHhXAHHysZqd1TBW4LtfKIdQFbt2BBtaSi_QoW8CG8&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=A1QoDwAAQBAJ&hl=&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=A1QoDwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=A1QoDwAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 2064.52, currencyCode: 'INR' },
        retailPrice: { amount: 929.03, currencyCode: 'INR' },
        buyLink:
          'https://play.google.com/store/books/details?id=A1QoDwAAQBAJ&rdid=book-A1QoDwAAQBAJ&rdot=1&source=gbs_api',
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
          'http://play.google.com/books/reader?id=A1QoDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;...',
      }
    },
  ];
  let mockCartBooksSelector: MemoizedSelector<BookReducer.State, any>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule,
        HttpClientTestingModule,            
        MaterialsModule,SharedModule        
      ],
      providers: [BooksFacade,BookSearchService,HttpClient,provideMockStore({
        initialState,
      })],
    }).compileComponents();

    mockStore = TestBed.get(MockStore);
    const getBookFeatureState = createFeatureSelector<BookReducer.BooksState>(
      'books'
    );
    mockCartBooksSelector = mockStore.overrideSelector(
      BookSelector.getCartItemsCount,
      initialState
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BooksFacade);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should assign cartBooks$ when component is resolved', async(() => {    
    component.cartItemsCount$.forEach((element) => {
      expect(element[0].id).toEqual('A1QoDwAAQBAJ');
    });
  }));
  
});
