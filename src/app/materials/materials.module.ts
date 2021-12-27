import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    MatListModule,MatGridListModule,
    MatSliderModule,MatCardModule,
    CommonModule,FlexLayoutModule
  ],
  exports:[MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,MatGridListModule,
    MatIconModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    MatListModule,FlexLayoutModule,
    MatSliderModule,MatCardModule,
    CommonModule]
})
export class MaterialsModule { }
