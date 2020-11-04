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
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    request.condominiumId = userLogged.condominiumId;
    delete request.id;
    return this.apiService.post('api/building', request);
  }

  updateBuilding(request: any) {
    return this.apiService.put('api/building', request);
  }

  getBuildingById(buildingId: number) {
    return this.apiService.get(`api/building/byId/${buildingId}`);
  }

  getBuildingsByCondominium(condominiumId?: number) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
    return this.apiService.get('api/building/by-condominium/'+ condoId);
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
