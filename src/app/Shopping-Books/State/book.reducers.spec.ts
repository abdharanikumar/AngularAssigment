import { BooksFacade } from './book.facade';
import * as BookReducer from './book.reducers';
import * as BookActions from './book.actions';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ngrx-store', () => {
  let book;
  let purchaseInfo;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [],
      providers: [BooksFacade],
    }).compileComponents();
  });

  beforeEach(() => {
    book = [
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
    purchaseInfo = {
      name: 'dharani',
      email: 'dharani@test.com',
      mobile: '1234567890',
      address: 'Hydrabad',
    };
  });

  xit('should execute LoadBooks', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.LoadBooks({ payload: 'angular' });
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.searchKey).toBe('angular');
  });

  it('should execute LoadBooksSuccess', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.LoadBooksSuccess({ payload: book });
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.list).not.toBe(null);
  });

  it('should execute LoadBooksFail', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.LoadBooksFail({ payload: 'error' });
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.searchKey).not.toBe(null);
  });

  it('should execute AddBookToCart', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.AddBookToCart({ payload: book[0] });   
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.cartItems).not.toBe(null);
  });

  it('should execute DeleteBookFromCart', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.DeleteBookFromCart({ payload: book[0] });   
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.cartItems).not.toBe(null);
  });

  it('should execute AddBookToCollections', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.AddBookToCollections({ payload: book,purchaseInfo: purchaseInfo});
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.collectionItems).not.toBe(null);
  });

  it('should execute AddBookToPurchaseList', () => {
    const initialState = BookReducer.initialState;
    const action = BookActions.AddBookToPurchaseList({ payload: book[0]});
    const state = BookReducer.shopBooksReducer(initialState, action);

    expect(state.purchaseList).not.toBe(null);
  });

});
