import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class RuleService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  getRulesByCondominium() {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8092/profiles/condominiums/${condominium.id}/condominiumrules`);
  }

  createRule(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8092/profiles/condominiums/${condominium.id}/condominiumrules`, request);
  }

  updateRule(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8092/profiles/condominiums/${condominium.id}/condominiumrules/${request.id}`, request);
  }

  deleteRule(billId: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8092/profiles/condominiums/${condominium.id}/condominiumrules/${billId}`)
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
