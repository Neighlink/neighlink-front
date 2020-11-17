import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';
import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';
import { FlatDetailViewComponent } from './flat-detail-view/flat-detail-view.component';
import { FlatListViewComponent } from './flat-list-view/flat-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingListViewComponent
  },
  {
    path: ':id/edit',
    component: EditBuildingViewComponent
  },
  {
    path: ':id/flats',
    component: FlatListViewComponent
  },
  {
    path: ':id/flats/:flatId/detail',
    component: FlatDetailViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
