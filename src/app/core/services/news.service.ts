import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class NewsService {
  private subjectList = new Subject<any>();
  private subjectForm = new Subject<any>();

  constructor(
    private apiService: ApiService
  ) { }

  getNewsByCondominium() {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.get(`8093/interactions/condominiums/${condominium.id}/news`);
  }

  createNew(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.post(`8093/interactions/condominiums/${condominium.id}/news`, request);
  }

  updateNew(request: any) {
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.put(`8093/interactions/condominiums/${condominium.id}/news/${request.id}`, request);
  }

  deleteNew(id: any){
    var condominium = JSON.parse(localStorage.getItem('condominium'));
    return this.apiService.delete(`8093/interactions/condominiums/${condominium.id}/news/${id}`)
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