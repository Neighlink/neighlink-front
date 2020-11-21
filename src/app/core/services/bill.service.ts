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
    return this.apiService.get(`8094/infos/condominiums/${condominium.id}/bills`);
  }

  getBillsByFlat(flatId) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8094/infos/condominiums/${condominium.id}/departments/${flatId}/bills`);
  }

  createBill(request: any, flatId) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8094/infos/condominiums/${condominium.id}/departments/${flatId}/bills`, request);
  }

  updateBill(request: any, flatId) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8094/infos/condominiums/${condominium.id}/departments/${flatId}/bills/${request.id}`, request);
  }

  deleteBill(element: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8094/infos/condominiums/${condominium.id}/departments/${element.departmentId}/bills/${element.id}`)
  }

  savePay(e: any, flatId) {
    e.confirmPaid = true;
    e.urlImage = 'url';
    e.residentId = 6;
    return this.apiService.post(`8094/infos/departments/${flatId}/bills/${e.id}/pays`, e);
  }

  getPay(e: any) {
    return this.apiService.get(`8094/infos/departments/${e.departmentId}/bills/${e.billId}/pays`);
  }

  acceptPay(e: any){
    return this.apiService.put(`8094/infos/departments/${e.departmentId}/bills/${e.billId}/pays/${e.payId}/accept`)
  }

  dennyPay(e: any){
    return this.apiService.put(`8094/infos/departments/${e.departmentId}/bills/${e.billId}/pays/${e.payId}/denny`)
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
