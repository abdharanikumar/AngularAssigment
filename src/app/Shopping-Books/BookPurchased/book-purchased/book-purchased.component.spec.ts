import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPurchasedComponent } from './book-purchased.component';

describe('BookPurchasedComponent', () => {
  let component: BookPurchasedComponent;
  let fixture: ComponentFixture<BookPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
