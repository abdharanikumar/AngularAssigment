import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BookPurchasedComponent } from '../../BookPurchased/book-purchased/book-purchased.component';
import { BooksFacade } from '../../State/book.facade';
import { MatDialog } from '@angular/material/dialog';
import { BookItem } from '../../State/Interface/book.Model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {  
  billingForm! : FormGroup;
  selectedBook!: BookItem[];
  constructor(private dialog: MatDialog,private booksFacade: BooksFacade){
   }

  ngOnInit():void {
    this.billingForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    name: new FormControl('', { validators: [Validators.required] }),
    phone: new FormControl('', { validators: [Validators.required] }),
    address: new FormControl('', { validators: [Validators.required] })
    });
  }
  
  submitOrder(form :any){
    if(form.value.address !== null && form.value.address !== ''){
      this.booksFacade.purchaseListItems$.subscribe((res) => (this.selectedBook = res));
      const orderInfo = [{
        address : form.value.address ,
        name : form.value.name,
        email : form.value.email,
        phone : form.value.phone
      }];
      this.booksFacade.addBookToCollections(this.selectedBook, orderInfo);       
      form.reset();
      Object.keys(form.controls).forEach(key => {
        form.get(key).setErrors(null) ;
      });
      this.displayPopUp();
    }
  } 

  displayPopUp(): void {
    this.dialog.open(BookPurchasedComponent);
  }
}

