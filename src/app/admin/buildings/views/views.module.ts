import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';
import { FlatListViewComponent } from './flat-list-view/flat-list-view.component';
import { EditFlatViewComponent } from './edit-flat-view/edit-flat-view.component';


@NgModule({
  declarations: [
    EditBuildingViewComponent,
    BuildingListViewComponent,
    FlatListViewComponent,
    EditFlatViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
