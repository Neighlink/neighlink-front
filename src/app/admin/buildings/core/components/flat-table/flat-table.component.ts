import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Building } from 'src/app/core/models/building.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BuildingService } from 'src/app/core/services/building.service';
import { FlatFormComponent } from '../flat-form/flat-form.component';

@Component({
  selector: 'flat-table',
  templateUrl: './flat-table.component.html',
  styleUrls: ['./flat-table.component.scss']
})
export class FlatTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns= ['name', 'number','options'];
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
    const response: any = [
      {id: 1, name: 'Edificio 1', number: 203},
      {id: 2, name: 'Edificio 1', number: 405},
    ];
    this.dataSource = response;
    /* this.buildingService.getBuildingsByCondominium().subscribe(
      (response: any) =>{
        this.dataSource = response;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) =>{
        console.log('error', error);
      }
    ) */
  }

  ngOnInit() {
    this.getBuildings();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FlatFormComponent, {
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
