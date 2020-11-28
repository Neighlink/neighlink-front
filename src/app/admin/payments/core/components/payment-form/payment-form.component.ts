import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from 'src/app/core/services/bill.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaymentService } from 'src/app/core/services/payment.service';
import { User } from 'src/app/core/models/user.model';
import { Bill } from 'src/app/core/models/bill.model';
import { Payment } from 'src/app/core/models/payment.model';
import { Observable } from 'rxjs';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  public paymentFG: FormGroup;
  public paymentId: number;
  public users: User[];
  public bills: Bill[];

  constructor(
    private fb: FormBuilder, private userService: UserService,
    private billService: BillService, private router: Router,
    private route: ActivatedRoute, private paymentService: PaymentService,
    private analytics: GoogleAnalyticsService,
  ) { }

  reset(){
    this.paymentFG = this.fb.group({
      id: [],
      userId: ['',[Validators.required]],
      billId: ['',[Validators.required]],
      amount: ['',[Validators.required]],
      paymentDate: ['',[Validators.required]],
      status: []
    });
    this.paymentId = null;
    this.users = [];
    this.bills = [];
  }

  getUsers(){
    this.userService.getUsersByCondominium().subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error)
      }
    )
  }

  getBills(){
    /* this.billService.getBills().subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error)
      }
    ) */
  }

  ngOnInit() {
    this.reset();
    this.getUsers();
    this.getBills();
    this.route.params.subscribe((params: Params) => {
      this.paymentId = params.id;
      if(this.paymentId) this.getPayment();
    });
  }

  getPayment(){
    this.paymentService.getPaymentById(this.paymentId).subscribe(
      (response: any)=>{
        this.paymentFG.patchValue(response.data);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.paymentFG.valid){
      let payment: Payment = Object.assign({},this.paymentFG.value);
      let request: Observable<any>;

      this.analytics.values.eventCategory = 'payment';
      if(!payment.id){
        this.analytics.values.eventAction = 'create';
        request = this.paymentService.createPayment(payment)
      } else {
        this.analytics.values.eventAction = 'update';
        request = this.paymentService.updatePayment(payment)
      }
      this.analytics.sendToGoogleAnalytics();

      request.subscribe(
        (response: any)=>{
          if (!payment.id) this.paymentService.refreshList(true);
          if (payment.id) this.router.navigate(['/payments']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.paymentFG.value);
    }
  }
}
