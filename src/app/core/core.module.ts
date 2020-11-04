import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from './services/services.module';
import { GuardsModule } from './guards/guards.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    GuardsModule
  ]
})
export class CoreModule { }
