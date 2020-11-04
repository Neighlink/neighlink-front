import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule as AppCoreModule } from '../core/core.module';
import { SharedModule as AppSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppCoreModule,
    AppSharedModule
  ]
})
export class AdminModule { }
