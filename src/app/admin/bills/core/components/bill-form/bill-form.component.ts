import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from 'src/app/core/services/bill.service';
import { BuildingService } from 'src/app/core/services/building.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/core/models/bill.model';
import { Observable } from 'rxjs';
import { Building } from 'src/app/core/models/building.model';
import { PaymentCategory } from 'src/app/core/models/payment-category.model';
import { PaymentCategoryService } from 'src/app/core/services/payment-category.service';

@Component({
  selector: 'bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
  public billFG: FormGroup;
  public billId: number;
  public buildings: Building[];
  public paymentCategories: PaymentCategory[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private billService: BillService,
    private buildingService: BuildingService,
    private paymentCategoryService: PaymentCategoryService
  ) { }

  reset(){
    this.billFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      description: [''],
      buildingId: ['',[Validators.required]],
      paymentCategoryId: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
      amount: ['',[Validators.required]],
    });
    this.billId = null;
    this.buildings = [];
    this.paymentCategories = [];
  }

  getBuildings(){
    this.buildingService.getBuildingsByCondominium().subscribe(
      (response) => {
        this.buildings = response;
      },
      (error) => {
        console.log('error', error)
      }
    )
  }

  getPaymentCategories(){
    this.paymentCategoryService.getPaymentCategoriesByCondominium().subscribe(
      (response) =>{
        this.paymentCategories = response;
      },
      (error) => {
        console.log('error', error)
      }
    )
  }

  ngOnInit() {
    this.reset();
    this.getBuildings();
    this.getPaymentCategories();
    this.route.params.subscribe((params: Params) => {
      this.billId = params.id;
      if(this.billId) this.getBill();
    });
  }

  getBill(){
    this.billService.getBillById(this.billId).subscribe(
      (response: any)=>{
        this.billFG.patchValue(response);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.billFG.valid){
      let bill: Bill = Object.assign({},this.billFG.value);
      let request: Observable<any>;

      if(!bill.id){
        request = this.billService.createBill(bill)
      } else {
        request = this.billService.updateBill(bill)
      }

      request.subscribe(
        (response: any)=>{
          if (!bill.id) this.billService.refreshList(true);
          if (bill.id) this.router.navigate(['/bills']);
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
