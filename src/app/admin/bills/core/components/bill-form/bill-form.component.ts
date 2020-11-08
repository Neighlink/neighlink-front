import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from 'src/app/core/services/bill.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private billService: BillService,
    public dialogRef: MatDialogRef<BillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
        request = this.billService.createBill(bill)
      } else {
        request = this.billService.updateBill(bill)
      }

      request.subscribe(
        (response: any)=>{
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
