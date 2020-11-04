import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillListViewComponent } from './bill-list-view/bill-list-view.component';
import { EditBillViewComponent } from './edit-bill-view/edit-bill-view.component';

const routes: Routes = [
  {
    path: '',
    component: BillListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditBillViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
