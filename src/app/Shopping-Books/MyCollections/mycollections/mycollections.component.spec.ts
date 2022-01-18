import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { createFeatureSelector, MemoizedSelector, StoreModule } from '@ngrx/store';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as BookSelector from '../../State/book.selector';
import * as BookReducer from '../../State/book.reducers';
import { BooksFacade } from '../../State/book.facade';
import { BookListModule } from '../../Book-list/book-list.module';
import { reducers } from '../../State/Index';
import { MycollectionsComponent } from './mycollections.component';
import { concat, of, throwError } from 'rxjs';

describe('MycollectionsComponent', () => {
  let component: MycollectionsComponent;
  let fixture: ComponentFixture<MycollectionsComponent>;
  
  const dummyData : any = {
    kind: 'books#volume',
    id: 'GMTgAAAAMAAJ',
    etag: 'xWK/AG8XgaM',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/GMTgAAAAMAAJ',
    volumeInfo: {
      title: 'Class-tested and coherent, this textbook teaches classical and web information retrieval, including web search and the related areas of text classification and text clustering from basic concepts. It gives an up-to-date treatment of all aspects of the design and implementation of systems for gathering, indexing, and searching documents; methods for evaluating systems; and an introduction to the use of machine learning methods on text collections. All the important ideas are explained using examples and figures, making it perfect for introductory courses in information retrieval for advanced undergraduates and graduate students in computer science. Based on feedback from extensive classroom experience, the book has been carefully structured in order to make teaching more natural and effective. Slides and additional exercises (with solutions for lecturers) are also available through the book',
      authors: ['J. I. Tait'],
      publisher: 'Computer Laboratory, University of Cambridge',
      publishDate: '1987-11-01',
      description:
        'Automatic Search Term Variant Generation for Document Retrieval',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0520891989',
        },
        {
          type: 'ISBN_13',
          identifier: '9787520229827',
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 273,
      printType: 'BOOK',
      categories: ['Mobile'],
      averageRating: 4.5,
      ratingsCount: 3,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.2.5.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=GMTgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE717fgxX7h_VDse3CGUxknejzFNCk7Ox35pbPAAtyJeqbwHz4eSCj0xBBK9lWByyWRuJXi-6uOfnMGSKPL-lu1EArTWnriu4dZhIoeBnev1l56xz6RYrMHVNRYgj_nVqOmBOsNus&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=GMTgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73DDQhrDvnYay3qIj0dTc7GTJax42K6Btqp3kCtms-6S3TjDsw1CFWV688cvUf_YuOCodFfZ17NsLAq4cNPTzV-_GrzPg5bgagP-nR6FRR9hiHx1Ar2oKMmxmMMknLMOBYUzBml&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.co.in/books?id=GMTgAAAAMAAJ&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=GMTgAAAAMAAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=GMTgAAAAMAAJ',
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
          'http://play.google.com/books/reader?id=GMTgAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=GMTgAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        '&quot;Slides and additional exercises (with solutions for lecturers) are also available through the book&#39;s supporting website to help course instructors prepare their lectures.',
    },
  };

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
  
  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [MycollectionsComponent],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule,        
        MaterialsModule,SharedModule,BookListModule        
      ],
      providers: [
        {
          provide: BooksFacade,
          useValue: {
            addBookToCollections: () =>
              concat(of(dummyData), throwError(new Error('error!')))
          },
        },],
    }).compileComponents();
    fixture = TestBed.createComponent(MycollectionsComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
