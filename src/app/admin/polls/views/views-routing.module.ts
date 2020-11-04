import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollListViewComponent } from './poll-list-view/poll-list-view.component';
import { EditPollViewComponent } from './edit-poll-view/edit-poll-view.component';

const routes: Routes = [
  {
    path: '',
    component: PollListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditPollViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
