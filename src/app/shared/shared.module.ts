import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CondominiumDialogComponent } from './components/condominium-dialog/condominium-dialog.component';
import { PayDialogComponent } from './components/pay-dialog/pay-dialog.component';

@NgModule({
  declarations: [
    CondominiumDialogComponent,
    PayDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CondominiumDialogComponent,
    PayDialogComponent,
  ],
  entryComponents: [
    CondominiumDialogComponent,
    PayDialogComponent,
  ]
})
export class SharedModule { }
