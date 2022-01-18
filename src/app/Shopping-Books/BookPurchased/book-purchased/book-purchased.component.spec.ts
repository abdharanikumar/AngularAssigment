import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { BookPurchasedComponent } from './book-purchased.component';

describe('BookPurchasedComponent', () => {
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  let component: BookPurchasedComponent;
  let fixture: ComponentFixture<BookPurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPurchasedComponent],
      providers: [ {
        provide: MatDialogRef,
        useValue: mockDialogRef
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
