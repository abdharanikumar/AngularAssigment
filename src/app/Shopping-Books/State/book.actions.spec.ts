import * as BookActions from './book.actions';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { BookSearchService } from '../Search/search.service';

describe('loadBooks', () => {

  const initialState : any = {
    kind: 'books#volumes',
    totalItems: 1340,
      items: [
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
        }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookSearchService, provideMockStore({})],
    }).compileComponents();
  }));

  it('should create action for LoadSuccess with passed data', () => {
   
    const payload = { payload: initialState };
    expect(BookActions.LoadBooks(payload)).toEqual({
      type: '[Books Loaded] Load Book',
      payload: initialState
    });
  });

  it('should create action for LoadSuccess with passed data', () => {
   
    const payload = { payload: initialState };
    expect(BookActions.LoadBooksSuccess(payload)).toEqual({
      type: '[Books Loaded Successfully] Load Book Success',
      payload: initialState
    });
  });

  it('should create action for LoadFail', () => {
    const payload = { payload: 'error' };
    expect(BookActions.LoadBooksFail(payload)).toEqual({
      type: '[Books Load Failed] Load Book Failure',
      payload: 'error',
    });
  });

  it('should create action for AddToCart with passed data', () => {
    const payload = { payload: initialState };
    expect(BookActions.AddBookToCart(payload)).toEqual({
      type: '[Book Added To Cart] Add Book To Cart',
      payload: initialState,
    });
  });
  
  it('should create action for AddToCart with passed data', () => {
    const payload = { payload: initialState };
    expect(BookActions.DeleteBookFromCart(payload)).toEqual({
      type: '[Book Removed To Cart] Removed Book From Cart',
      payload: initialState,
    });
  });

  it('should create action for AddToCollections with passed data', () => {
    const purchaseInfo = [
      {
        address: 'Hydrabad',
        name: 'dharani',
        email: 'dharani@gmail.com',
        phone: '1234567890'
      }
    ];

    const payload : any = { payload: initialState, purchaseInfo};
    expect(BookActions.AddBookToCollections(payload)).toEqual({
      type: '[Book Added To Collections] Add Book To Collections',
      payload: initialState,
      purchaseInfo
    });
  });

  it('should create action for AddToCollections with passed data', () => {
   
    const payload : any = { payload: initialState};
    expect(BookActions.AddBookToPurchaseList(payload)).toEqual({
      type: '[Book Added To Purchase List] Add Book To PurchaseList',
      payload: initialState  
    });
  });
});
