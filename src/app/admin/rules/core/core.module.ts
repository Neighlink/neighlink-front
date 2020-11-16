import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { RuleTableComponent } from './components/rule-table/rule-table.component';
import { RuleFormComponent } from './components/rule-form/rule-form.component';

@NgModule({
  declarations: [
    RuleTableComponent,
    RuleFormComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports:[
    RuleTableComponent,
    RuleFormComponent
  ],
  entryComponents: [
    RuleFormComponent
  ]
})
export class CoreModule { }
