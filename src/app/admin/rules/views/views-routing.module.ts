import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListViewComponent } from './rule-list-view/rule-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: RuleListViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
