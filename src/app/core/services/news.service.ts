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

    createNews(request: any) {
        return this.apiService.post('api/new', request);
    }

    updateNews(request: any){
        return this.apiService.put('api/new', request);        
    }

    getNewById(newId:number){
        return this.apiService.get(`api/new/byId/${newId}`);
    }
    getNewByCondominium(condominiumId?: number){
        var userLogged = JSON.parse(localStorage.getItem('userLogged'));
        var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
        return this.apiService.get('api/new/by-condominium/'+condoId);
    }

    refreshList(status:boolean){
        this.subjectList.next({status});
    }

    listenerRefreshList(): Observable<any>{
        return this.subjectList.asObservable();
    }

    resetForm(){
        this.subjectList.next(true);
    }

    listenerResetForm(): Observable<any>{
        return this.subjectForm.asObservable();
    }



}