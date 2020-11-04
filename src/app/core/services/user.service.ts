import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  createUser(request: any) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    request.condominiumId = userLogged.condominiumId;
    delete request.id;

    if(request.role == 0){
      delete request.buildingId;
      delete request.houseNumber;
    }
    return this.apiService.post('api/user', request);
  }

  updateUser(request: any) {
    return this.apiService.put('api/user', request);
  }

  getUserById(userId: number) {
    return this.apiService.get(`api/user/${userId}`);
  }

  getUsersByCondominium() {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    return this.apiService.get('api/user/by-condominium/'+ userLogged.condominiumId);
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
