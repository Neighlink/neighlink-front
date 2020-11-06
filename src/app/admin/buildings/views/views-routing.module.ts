import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';
import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';
import { EditFlatViewComponent } from './edit-flat-view/edit-flat-view.component';
import { FlatListViewComponent } from './flat-list-view/flat-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditBuildingViewComponent
  },
  {
    path: 'flats/:id',
    component: FlatListViewComponent
  },
  {
    path: 'flats/edit/id',
    component: EditFlatViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
