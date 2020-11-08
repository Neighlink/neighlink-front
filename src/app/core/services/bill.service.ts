import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class BillService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  getBillsByCondominium() {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8091/configurations/condominiums/${condominium.id}/paymentCategories`);
  }

  createBill(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8091/configurations/condominiums/${condominium.id}/paymentCategories`, request);
  }

  updateBill(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8091/configurations/condominiums/${condominium.id}/paymentCategories/${request.id}`, request);
  }

  deleteBill(billId: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8091/configurations/condominiums/${condominium.id}/paymentCategories/${billId}`)
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
