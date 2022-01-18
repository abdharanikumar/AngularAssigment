import { TestBed } from '@angular/core/testing';
import { BooksFacade } from '../../State/book.facade';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BookListModule } from '../../Book-list/book-list.module';
import { BookListComponent } from './book-list.component';
import { reducers } from '../../State/Index';
import { HttpClient } from '@angular/common/http';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let bookMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [
        StoreModule.forRoot(reducers),
        RouterTestingModule,
        HttpClientTestingModule,            
        MaterialsModule,SharedModule,BookListModule        
      ],
      providers: [BooksFacade,HttpClient],
    }).compileComponents();
    
  });

  beforeEach(() => {
    component = new BookListComponent();
    bookMock = {
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
        "pageCount": 146,
        "averageRating": 4,
        "ratingsCount": 1,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
      },
    }
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test getters on component', () => {
    beforeEach(() => {
      component.book = bookMock;
    });

    it('get title', () => {
      expect(component.title).toBe(bookMock.volumeInfo.title);
    });

    it('get Image', () => {
      expect(component.image).toBe(bookMock.volumeInfo.imageLinks.smallThumbnail);
    })

    it('get description', () => {
      expect(component.description).toBe(bookMock.volumeInfo.description);
    });

    it('get autors', () => {
      expect(component.publisher).toBe(bookMock.volumeInfo.publisher);
    })
  })

});
