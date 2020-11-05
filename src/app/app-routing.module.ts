import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('src/app/admin/admin.module').then(m => m.AdminModule),
    /* canActivate: [
      AuthGuard
    ] */
  },
  {
    path: 'auth',
    loadChildren:() => import('src/app/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
