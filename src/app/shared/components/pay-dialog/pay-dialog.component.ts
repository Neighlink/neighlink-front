import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { BillService } from 'src/app/core/services/bill.service';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})
export class PayDialogComponent implements OnInit {
  public flatId: number;
  public billId: number;
  public billFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billService: BillService,
    public dialogRef: MatDialogRef<PayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private analytics: GoogleAnalyticsService,
  ) {
    this.reset();
    if(this.data){
      this.flatId = Number(this.data.flatId);
      if(this.data.bill) this.billFG.patchValue(this.data.bill);
    }
  }

  reset(){
    this.billId = null;
    this.billFG = this.fb.group({
      id: [],
      amount: ['',[Validators.required]],
      paymentDate: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.billFG.valid){
      let bill: any = Object.assign({},this.billFG.value);

      this.analytics.values.eventCategory = 'pay';
      this.analytics.values.eventAction = 'save_pay';
      this.analytics.sendToGoogleAnalytics();

      this.billService.savePay(bill, this.flatId).subscribe(
        (response: any)=>{
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
          this.billService.refreshList(true);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.billFG.value);
    }
  }

}
