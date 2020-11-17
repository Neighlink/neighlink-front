import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentCategoryService } from 'src/app/core/services/payment-category.service';

@Component({
  selector: 'bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
  public type: string;


  public billFG: FormGroup;
  public billId: number;

  constructor(
    private fb: FormBuilder,
    private paymentCategory: PaymentCategoryService,
    public dialogRef: MatDialogRef<BillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.reset();

    if(this.data){
      this.type = this.data.type;
      if(this.data.bill) this.billFG.patchValue(this.data.bill);
    }
  }

  reset(){
    this.billId = null;
    this.billFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.billFG.valid){
      let bill: any = Object.assign({},this.billFG.value);
      let request: Observable<any>;

      if(!bill.id){
        request = this.paymentCategory.createPaymentCategory(bill)
      } else {
        request = this.paymentCategory.updatePaymentCategory(bill)
      }

      request.subscribe(
        (response: any)=>{
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
          this.paymentCategory.refreshList(true);
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
