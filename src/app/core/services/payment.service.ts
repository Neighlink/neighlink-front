import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class PaymentService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  createPayment(request: any) {
    return this.apiService.post('api/payment', request);
  }

  updatePayment(request: any) {
    return this.apiService.put('api/payment', request);
  }

  getPaymentById(paymentId: number) {
    return this.apiService.get(`api/payment/byId/${paymentId}`);
  }

  getPaymentsByCondominium(condominiumId?: number) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
    return this.apiService.get('api/payment/by-condominium/'+ condoId);
  }

  getPaymentsByUser() {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    return this.apiService.get('api/payment/by-user/' + userLogged.id);
  }

  refreshList(status:boolean){
    this.subjectList.next({status});
  }

  listenerRefreshList(): Observable<any>{
    return this.subjectList.asObservable();
  }

  resetForm(){
    this.subjectForm.next(true);
  }

  listenerResetForm(): Observable<any>{
    return this.subjectForm.asObservable();
  }
}
