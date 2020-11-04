import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as AuthViewsModule } from './views/views.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthViewsModule,
    SharedModule
  ]
})
export class AuthModule { }
