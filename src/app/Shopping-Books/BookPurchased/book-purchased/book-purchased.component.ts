import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-purchased',
  templateUrl: './book-purchased.component.html',
  styleUrls: ['./book-purchased.component.scss']
})
export class BookPurchasedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookPurchasedComponent>) { }
  ngOnInit(): void {    
  }

  onNoClick(): void {
    this.dialogRef.close();
  } 

}
