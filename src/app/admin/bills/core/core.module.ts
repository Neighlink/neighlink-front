import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { BillTableComponent } from './components/bill-table/bill-table.component';
import { BillFormComponent } from './components/bill-form/bill-form.component';

@NgModule({
  declarations: [
    BillTableComponent,
    BillFormComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports:[
    BillTableComponent,
    BillFormComponent
  ],
  entryComponents: [
    BillFormComponent
  ]
})
export class CoreModule { }
