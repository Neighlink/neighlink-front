import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { BillService } from 'src/app/core/services/bill.service';
import { PaymentCategoryService } from 'src/app/core/services/payment-category.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
  public flatId: number;
  public type: string;

  public paymentCategories: any[] = [];
  public billId: number;
  public billFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billService: BillService,
    private paymentCategoryService: PaymentCategoryService,
    public dialogRef: MatDialogRef<BillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.reset();
    this.getPaymentCategories();
    if(this.data){
      this.type = this.data.type;
      this.flatId = Number(this.data.flatId);
      if(this.data.flat){
        this.data.flat.paymentCategoryId = this.data.flat.category.id;
        this.billFG.patchValue(this.data.flat);
      }
    }
  }

  getPaymentCategories(){
    this.paymentCategoryService.getPaymentCategoriesByCondominium().subscribe(
      (response: any) =>{
        this.paymentCategories = response.result;
      },
      (error: any) =>{
        console.log('error getPaymentCategories', error);
      }
    )
  }

  reset(){
    this.billId = null;
    this.billFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      paymentCategoryId: [null,[Validators.required]],
      amount: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.billFG.valid){
      let bill: any = Object.assign({},this.billFG.value);
      let request: Observable<any>;

      if(!bill.id){
        request = this.billService.createBill(bill, this.flatId)
      } else {
        request = this.billService.updateBill(bill, this.flatId)
      }

      request.subscribe(
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
