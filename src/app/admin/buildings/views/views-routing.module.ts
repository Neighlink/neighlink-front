import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingListViewComponent } from './building-list-view/building-list-view.component';
import { EditBuildingViewComponent } from './edit-building-view/edit-building-view.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditBuildingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
