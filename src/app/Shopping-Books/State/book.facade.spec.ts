import { async, inject, TestBed } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { BooksFacade } from './book.facade';
import { BookItem } from './Interface/book.Model';
import * as BookReducer from './book.reducers';
import * as BookActions from './book.actions';
import * as BookSelector from './book.selector';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('Books Facade', () => {
  let mockStore: MockStore;
  let mockBooksSelector: MemoizedSelector<BookReducer.BooksState, any>;
  let mockCartBooksSelector: MemoizedSelector<BookReducer.BooksState, any>;
  let mockCollectionBooksSelector: MemoizedSelector<BookReducer.BooksState, any>;
  let mockPurchaseBooksSelector: MemoizedSelector<BookReducer.BooksState, any>;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Store,
        BooksFacade,
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();
    mockStore = TestBed.get(MockStore);
    
    mockCollectionBooksSelector = mockStore.overrideSelector(
        BookSelector.getCollectionItems,
      initialState
    );
    mockCartBooksSelector = mockStore.overrideSelector(
        BookSelector.getCartItems,
      initialState
    );
    mockBooksSelector = mockStore.overrideSelector(
        BookSelector.getBooks,
      initialState
    );
    mockPurchaseBooksSelector = mockStore.overrideSelector(
        BookSelector.getPurchaseItems,
        initialState
      );
    
  }));

  it('should be created', () => {
    const facade: BooksFacade = TestBed.get(BooksFacade);
    expect(facade).toBeTruthy();
  });

  xit('should initialize values from store', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      facade.cartBooks$.forEach((x) => {
        expect(x[0].id).toContain('6JVCAwAAQBAJ');
      });
      facade.collectionBooks$.forEach((x) => {
        expect(x[0].id).toContain('6JVCAwAAQBAJ');
      });
      facade.cartItemsCount$.forEach((x) => {
        expect(x).toEqual(1);
      });
      facade.books$.forEach((x) => {
        expect(x[0].id).toContain('6JVCAwAAQBAJ');
      });
    }
  ));

  it('should call and execute loadAllBooks method in facade', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const searchValue = 'Angular';
      const loadAllSpy = spyOn(facade, 'loadAllBooks').and.callThrough();
      const mockStoreSpy = spyOn(mockStore, 'dispatch').and.callThrough();

      facade.loadAllBooks(searchValue);
      
      expect(loadAllSpy).toHaveBeenCalledWith(searchValue);
      expect(mockStoreSpy).toHaveBeenCalled();
    }
  ));

  it('should execute addBookToCollections method in facade', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const payload : any = [
        {
        "kind": "books#volume",
        "id": "0BSOg0oHhZ0C",
        "etag": "sWJBeRbxMK0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
        "volumeInfo": {
          "title": "Angular Momentum in Quantum Mechanics",
          "authors": [
            "A. R. Edmonds"
          ],
          "publisher": "Princeton University Press",
          "publishedDate": "1996",
          "description": "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0691025894"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780691025896"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 146,
          "printType": "BOOK",
          "categories": [
            "Science"
          ],
          "averageRating": 4,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.1.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C"
        },
        "saleInfo": {
          "country": "IN",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IN",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;..."
        }
      }];
      const purchaseInfo = {
        "purchaseInfo": {
        address: 'Hydrabad',
        name: 'dharani',
        email: 'dharani@gmail.com',
        phone: '1234567890'
        }
      };
      const x = {payload , purchaseInfo};
      const addToCollectionsSpy = spyOn(facade, 'addBookToCollections').and.callThrough();
      const mockStoreSpy = spyOn(mockStore, 'dispatch').and.callThrough();

      facade.addBookToCollections(payload,purchaseInfo);
      
      expect(addToCollectionsSpy).toHaveBeenCalledWith(payload,purchaseInfo);
      expect(mockStoreSpy).toHaveBeenCalled();
    }
  ));

  it('should execute clearBookfromCart method in facade', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const payload : any = 
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
    };
      const clearCartSpy = spyOn(facade, 'clearBookfromCart').and.callThrough();
      const mockStoreSpy = spyOn(mockStore, 'dispatch').and.callThrough();

      facade.clearBookfromCart(payload);
      
      expect(clearCartSpy).toHaveBeenCalledWith(payload);
      expect(mockStoreSpy).toHaveBeenCalled();
    }
  ));

  it('should execute addBookToCart method in facade', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const payload : any = 
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
    };
      const addToCartSpy = spyOn(facade, 'addBookToCart').and.callThrough();
      const mockStoreSpy = spyOn(mockStore, 'dispatch').and.callThrough();

      facade.addBookToCart(payload);
      
      expect(addToCartSpy).toHaveBeenCalledWith(payload);
      expect(mockStoreSpy).toHaveBeenCalled();
    }
  ));

  it('should execute addBookToPurchaseListItems method in facade', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const payload : any = 
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
          industryIdentifiers: [
            { type: 'ISBN_13', identifier: '9780735637511' },
            { type: 'ISBN_10', identifier: '0735637512' },
          ],
          readingModes: { text: true, image: true },
          pageCount: 368,
          printType: 'BOOK',
          categories: ['Computers'],
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
        type: '[Book Added To Purchase List] Add Book To PurchaseList',
      };
      const addToCartSpy = spyOn(facade, 'addBookToPurchaseListItems').and.callThrough();
      const mockStoreSpy = spyOn(mockStore, 'dispatch').and.callThrough();

      facade.addBookToPurchaseListItems(payload);
      
      expect(addToCartSpy).toHaveBeenCalledWith(payload);
      expect(mockStoreSpy).toHaveBeenCalled();
    }
  ));

});
