import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';
import { BillListViewComponent } from './bill-list-view/bill-list-view.component';
import { EditBillViewComponent } from './edit-bill-view/edit-bill-view.component';

@NgModule({
  declarations: [
    BillListViewComponent,
    EditBillViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
