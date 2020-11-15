import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Building } from 'src/app/core/models/building.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FlatFormComponent } from '../flat-form/flat-form.component';
import { FlatService } from 'src/app/core/services/flat.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'flat-table',
  templateUrl: './flat-table.component.html',
  styleUrls: ['./flat-table.component.scss']
})
export class FlatTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns= ['name', 'limiteRegister', 'secretCode','options'];
  dataSource = new MatTableDataSource<Building>();

  private buildingId: number = null;

  constructor(
    public dialog: MatDialog,
    private flatService: FlatService,
    private route: ActivatedRoute,
  ) {
    this.flatService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getFlats();
    })
  }

  getFlats(){
    this.flatService.getFlatsByBuilding(this.buildingId).subscribe(
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
    this.route.params.subscribe((params: Params) => {
      this.buildingId = params.id;
      if(this.buildingId) this.getFlats();
    });
  }

  openDialog(type: string, flat?): void {
    const dialogRef = this.dialog.open(FlatFormComponent, {
      width: '50%',
      data: {
        type,
        buildingId: this.buildingId,
        flat
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  deleteElement(element: any){
    this.flatService.deleteFlat(element).subscribe(
      (response: any) => {
        this.getFlats();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}
