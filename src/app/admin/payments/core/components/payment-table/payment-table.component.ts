import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { Payment } from '../../../../../core/models/payment.model';
import { PaymentService } from 'src/app/core/services/payment.service';
import { Observable } from 'rxjs';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { BillService } from 'src/app/core/services/bill.service';

@Component({
  selector: 'payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {
  displayedColumns: string[] = ['flat' ,'name', 'amount', 'category', 'startDate', 'endDate', 'hasPaid', 'options'];
  dataSource = new MatTableDataSource<Payment>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private billService: BillService,
    private paymentService: PaymentService,
  ) {
    this.paymentService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getPayments();
    })
  }

  getPayments(){
    var userRole = localStorage.getItem('role');
    let request: Observable<any>;
    if(userRole == USER_ROLE.ADMINISTRATOR){
      request = this.billService.getBillsByCondominium()
    } else {
      request = this.paymentService.getPaymentsByUser()
    }

    request.subscribe(
      (response: any)=>{
        this.dataSource = response.result;
        this.dataSource.paginator = this.paginator;
      },
      (error: any)=>{
        console.log('error', error);
      }
    );
  }

  ngOnInit() {
    this.getPayments();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentFormComponent, {
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
