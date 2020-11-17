import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { RuleTableComponent } from './components/rule-table/rule-table.component';
import { RuleFormComponent } from './components/rule-form/rule-form.component';
import { NewTableComponent } from './components/new-table/new-table.component';
import { NewFormComponent } from './components/new-form/new-form.component';

@NgModule({
  declarations: [
    RuleTableComponent,
    RuleFormComponent,
    NewTableComponent,
    NewFormComponent,
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports:[
    RuleTableComponent,
    RuleFormComponent,
    NewTableComponent,
    NewFormComponent,
  ],
  entryComponents: [
    RuleFormComponent,
    NewFormComponent
  ]
})
export class CoreModule { }
