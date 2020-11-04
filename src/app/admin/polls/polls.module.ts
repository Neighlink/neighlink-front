import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as PollViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PollViewsModule
  ]
})
export class PollsModule { }
