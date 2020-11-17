import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { BillFormComponent } from 'src/app/admin/buildings/core/components/bill-form/bill-form.component';
import { Bill } from 'src/app/core/models/bill.model';
import { BillService } from 'src/app/core/services/bill.service';
import { PayDialogComponent } from 'src/app/shared/components/pay-dialog/pay-dialog.component';

@Component({
  selector: 'bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.scss']
})
export class BillTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'description', 'amount', 'startDate', 'endDate', 'options'];
  dataSource = new MatTableDataSource<Bill>();

  public flatId: number;

  constructor(
    public dialog: MatDialog,
    private billService: BillService,
    private route: ActivatedRoute,
  ) {
    this.billService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getBills();
    })
  }

  getBills(){
    this.billService.getBillsByFlat(this.flatId).subscribe(
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
      this.flatId = params.flatId;
      if(this.flatId) this.getBills();
    });
  }

  confirmPay(bill): void {
    const dialogRef = this.dialog.open(PayDialogComponent, {
      width: '50%',
      data: {
        bill,
        flatId: this.flatId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  openDialog(type: string, flat?): void {
    const dialogRef = this.dialog.open(BillFormComponent, {
      width: '50%',
      data: {
        type,
        flat,
        flatId: this.flatId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  deleteElement(element: any){
    this.billService.deleteBill(element).subscribe(
      (response:any) => {
        this.getBills();
      },
      (error: any) => {
        console.error('error', error);
      }
    )
  }
}
