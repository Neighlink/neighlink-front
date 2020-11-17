import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class PaymentCategoryService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  getPaymentCategoriesByCondominium() {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8094/infos/condominiums/${condominium.id}/paymentCategories`);
  }

  createPaymentCategory(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8094/infos/condominiums/${condominium.id}/paymentCategories`, request);
  }

  updatePaymentCategory(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8094/infos/condominiums/${condominium.id}/paymentCategories/${request.id}`, request);
  }

  deletePaymentCategory(billId: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8094/infos/condominiums/${condominium.id}/paymentCategories/${billId}`)
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