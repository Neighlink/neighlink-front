import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeViewComponent } from './code-view/code-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignupViewComponent } from './signup-view/signup-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoginViewComponent
  },
  {
    path: 'signup',
    component: SignupViewComponent
  },
  {
    path: 'code',
    component: CodeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
