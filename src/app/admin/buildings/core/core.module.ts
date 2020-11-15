import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { BuildingFormComponent } from './components/building-form/building-form.component';
import { BuildingTableComponent } from './components/building-table/building-table.component';
import { FlatTableComponent } from './components/flat-table/flat-table.component';
import { FlatFormComponent } from './components/flat-form/flat-form.component';

@NgModule({
  declarations: [
    BuildingFormComponent,
    BuildingTableComponent,
    FlatTableComponent,
    FlatFormComponent
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
    FlatFormComponent
  ],
  entryComponents: [
    BuildingFormComponent,
    FlatFormComponent,
  ]
})
export class CoreModule { }
