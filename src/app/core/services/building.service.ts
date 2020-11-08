import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class BuildingService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  createBuilding(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8091/configurations/condominiums/${condominium.id}/buildings`, request);
  }

  updateBuilding(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8091/configurations/condominiums/${condominium.id}/buildings/${request.id}`, request);
  }

  getBuildingById(buildingId: number) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8091/configurations/condominiums/${condominium.id}/buildings/${buildingId}`);
  }

  getBuildingsByCondominium() {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8091/configurations/condominiums/${condominium.id}/buildings`);
  }

  deleteBuilding(e: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8091/configurations/condominiums/${condominium.id}/buildings/${e.id}`)
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
