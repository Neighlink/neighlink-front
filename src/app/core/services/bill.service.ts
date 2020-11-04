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

  createBill(request: any) {
    delete request.id;
    return this.apiService.post('api/bill', request);
  }

  updateBill(request: any) {
    return this.apiService.put('api/bill', request);
  }

  getBills() {
    return this.apiService.get('api/bill/all');
  }

  getBillById(billId: number) {
    return this.apiService.get(`api/bill/byId/${billId}`);
  }

  getBillsByCondominium(condominiumId?: number) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
    return this.apiService.get('api/bill/by-condominium/'+ condoId);
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
