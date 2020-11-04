import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { PollFormComponent } from './components/poll-form/poll-form.component';
import { PollTableComponent } from './components/poll-table/poll-table.component';

@NgModule({
  declarations: [
    PollFormComponent,
    PollTableComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    PollFormComponent,
    PollTableComponent
  ],
  entryComponents: [
    PollFormComponent
  ]
})
export class CoreModule { }
