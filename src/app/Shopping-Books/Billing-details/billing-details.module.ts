import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared.module';

const billingRoutes: Routes = [
  { path: '', component: BillingDetailsComponent }
];

@NgModule({
  declarations: [
    BillingDetailsComponent
    
  ],
  imports: [
    CommonModule,MatDialogModule,
    RouterModule.forChild(billingRoutes),
    MaterialsModule,SharedModule
  ]
})
export class BillingDetailsModule { }
