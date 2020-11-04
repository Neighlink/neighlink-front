import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListViewComponent } from './payment-list-view/payment-list-view.component';
import { EditPaymentViewComponent } from './edit-payment-view/edit-payment-view.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditPaymentViewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
