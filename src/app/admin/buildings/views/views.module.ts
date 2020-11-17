import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';
import { FlatListViewComponent } from './flat-list-view/flat-list-view.component';
import { FlatDetailViewComponent } from './flat-detail-view/flat-detail-view.component';

@NgModule({
  declarations: [
    EditBuildingViewComponent,
    BuildingListViewComponent,
    FlatListViewComponent,
    FlatDetailViewComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
