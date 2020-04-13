import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { MessageDialogComponent } from './dialog/message-dialog/message-dialog.component';



@NgModule({
  declarations: [ConfirmDialogComponent, MessageDialogComponent],
  imports: [ 
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
