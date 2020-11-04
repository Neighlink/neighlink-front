import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditUserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
