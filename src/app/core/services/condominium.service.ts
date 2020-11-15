import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CondominiumService {
  constructor(
    private apiService: ApiService
  ) { }

  getCondominiums() {
    const user = JSON.parse(localStorage.getItem('userLogged'));
    return this.apiService.get(`8092/profiles/administrators/${user.id}/condominiums`);
  }

  createCondominium(request: any){
    return this.apiService.post(`8092/profiles/condominiums`, request);
  }
}
