import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as PaymentViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentViewsModule
  ]
})
export class PaymentsModule { }
