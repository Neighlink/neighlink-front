import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { BuildingFormComponent } from './components/building-form/building-form.component';
import { BuildingTableComponent } from './components/building-table/building-table.component';
import { FlatTableComponent } from './components/flat-table/flat-table.component';
import { FlatFormComponent } from './components/flat-form/flat-form.component';
import { BillTableComponent } from './components/bill-table/bill-table.component';
import { BillFormComponent } from './components/bill-form/bill-form.component';

@NgModule({
  declarations: [
    BuildingFormComponent,
    BuildingTableComponent,
    FlatTableComponent,
    FlatFormComponent,
    BillTableComponent,
    BillFormComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    BuildingFormComponent,
    BuildingTableComponent,
    FlatTableComponent,
    FlatFormComponent,
    BillTableComponent,
    BillFormComponent
  ],
  entryComponents: [
    BuildingFormComponent,
    FlatFormComponent,
    BillFormComponent
  ]
})
export class CoreModule { }
