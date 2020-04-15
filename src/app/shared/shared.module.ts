import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { MessageDialogComponent } from './dialog/message-dialog/message-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ConfirmDialogComponent, MessageDialogComponent],
  imports: [ 
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ConfirmDialogComponent, 
    MessageDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent, 
    MessageDialogComponent
  ]
})
export class SharedModule { }
