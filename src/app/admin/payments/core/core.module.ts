import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { PaymentTableComponent } from './components/payment-table/payment-table.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

@NgModule({
  declarations: [
    PaymentTableComponent,
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    PaymentTableComponent,
    PaymentFormComponent
  ],
  entryComponents: [
    PaymentFormComponent
  ]
})
export class CoreModule { }
