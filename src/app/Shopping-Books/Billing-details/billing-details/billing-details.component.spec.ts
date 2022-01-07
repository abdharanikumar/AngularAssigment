import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from 'src/app/shared.module';
import { BookPurchasedComponent } from '../../BookPurchased/book-purchased/book-purchased.component';
import { BooksFacade } from '../../State/book.facade';
import { MatDialogModule } from '@angular/material/dialog';
import { BillingDetailsComponent } from './billing-details.component';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingDetailsComponent,BookPurchasedComponent ],
      providers: [BooksFacade,MatDialog],
      imports: [MaterialsModule,SharedModule,MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call displayPopUp in onInit() method', () => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const ngOnInitSpy = spyOn(component, 'ngOnInit');
    const displayPopUp = spyOn(component, 'displayPopUp');

    component.ngOnInit();
    component.displayPopUp();

    expect(ngOnInitSpy).toHaveBeenCalled();
    expect(displayPopUp).toHaveBeenCalled();
  });

});
