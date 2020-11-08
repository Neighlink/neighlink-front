import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Building } from 'src/app/core/models/building.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BuildingFormComponent } from '../building-form/building-form.component';
import { BuildingService } from 'src/app/core/services/building.service';

@Component({
  selector: 'building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.scss']
})
export class BuildingTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns= ['name','options'];
  dataSource = new MatTableDataSource<Building>();

  constructor(
    public dialog: MatDialog,
    private buildingService: BuildingService
  ) {
    this.buildingService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getBuildings();
    })
  }

  getBuildings(){
    this.buildingService.getBuildingsByCondominium().subscribe(
      (response: any) =>{
        if(response.result.length > 0){
          this.dataSource = response.result;
          this.dataSource.paginator = this.paginator;
        }
      },
      (error: any) =>{
        console.log('error', error);
      }
    )
  }

  ngOnInit() {
    this.getBuildings();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BuildingFormComponent, {
      width: '50%',
      data: {
        type: 'create',
        info: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

}
