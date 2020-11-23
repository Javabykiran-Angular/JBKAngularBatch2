import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import * as Matrial from '@angular/material';



@NgModule({
  declarations: [MatConfirmDialogComponent],
  imports: [
    CommonModule,
    Matrial.MatDialogModule,
    Matrial.MatIconModule
  ],
  exports:[
    Matrial.MatDialogModule,
    Matrial.MatIconModule
  ]
})
export class MaterialModule { }
