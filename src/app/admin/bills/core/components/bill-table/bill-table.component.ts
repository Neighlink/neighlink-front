import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BillFormComponent } from '../bill-form/bill-form.component';
import { Bill } from '../../../../../core/models/bill.model';
import { BillService } from 'src/app/core/services/bill.service';

@Component({
  selector: 'bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.scss']
})
export class BillTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'amount', 'paymentCategoryId', 'buildingId', 'endDate', 'status', 'options'];
  dataSource = new MatTableDataSource<Bill>();

  constructor(
    public dialog: MatDialog,
    private billService: BillService
  ) {
    this.billService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getBills();
    })
  }

  getBills(){
    this.billService.getBillsByCondominium().subscribe(
      (response: any) =>{
        this.dataSource = response;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) =>{
        console.log('error', error);
      }
    )
  }

  ngOnInit() {
    this.getBills();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BillFormComponent, {
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
