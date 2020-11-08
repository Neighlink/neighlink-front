import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class FlatService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  createFlat(request: any, buildingId: number) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8091/configurations/condominiums/${condominium.id}/buildings/${buildingId}/departments`, request);
  }

  updateFlat(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8091/configurations/condominiums/${condominium.id}/buildings/${request.buildingId}/departments`, request);
  }

  getFlatById(flatId: number) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8091/configurations/condominiums/${condominium.id}/buildings/{buildingId}/departments/${flatId}`);
  }

  getFlatsByBuilding(buildingId: number) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8091/configurations/condominiums/${condominium.id}/buildings/${buildingId}/departments`);
  }

  deleteFlat(e: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8091/configurations/condominiums/${condominium.id}/buildings/${e.buildingId}/departments/${e.id}`)
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
