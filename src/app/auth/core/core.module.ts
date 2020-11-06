import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../core/core.module';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CodeFormComponent } from './components/code-form/code-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    CodeFormComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    CodeFormComponent
  ]
})
export class CoreModule { }
