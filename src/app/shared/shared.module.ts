import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { MessageDialogComponent } from './dialog/message-dialog/message-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ConfirmDialogComponent, MessageDialogComponent],
  imports: [ 
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ConfirmDialogComponent, 
    MessageDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent, 
    MessageDialogComponent
  ]
})
export class SharedModule { }
