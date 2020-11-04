import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';


@NgModule({
  declarations: [
    EditBuildingViewComponent,
    BuildingListViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
