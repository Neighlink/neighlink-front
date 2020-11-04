import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { BuildingFormComponent } from './components/building-form/building-form.component';
import { BuildingTableComponent } from './components/building-table/building-table.component';

@NgModule({
  declarations: [
    BuildingFormComponent,
    BuildingTableComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    BuildingFormComponent,
    BuildingTableComponent
  ],
  entryComponents: [
    BuildingFormComponent
  ]
})
export class CoreModule { }
