import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BillFormComponent } from '../bill-form/bill-form.component';
import { Bill } from '../../../../../core/models/bill.model';
import { PaymentCategoryService } from 'src/app/core/services/payment-category.service';

@Component({
  selector: 'payment-category-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.scss']
})
export class BillTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'description', 'options'];
  dataSource = new MatTableDataSource<Bill>();

  constructor(
    public dialog: MatDialog,
    private paymentCategoryService: PaymentCategoryService
  ) {
    this.paymentCategoryService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getBills();
    })
  }

  getBills(){
    this.paymentCategoryService.getPaymentCategoriesByCondominium().subscribe(
      (response: any) =>{
        this.dataSource = response.result;
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

  openDialog(type: string, bill?): void {
    const dialogRef = this.dialog.open(BillFormComponent, {
      width: '50%',
      data: {
        type,
        bill
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  deleteElement(element: any){
    this.paymentCategoryService.deletePaymentCategory(element.id).subscribe(
      (response:any) => {
        this.getBills();
      },
      (error: any) => {
        console.error('error', error);
      }
    )
  }
}
