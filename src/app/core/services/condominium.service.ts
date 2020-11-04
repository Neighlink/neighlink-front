import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CondominiumService {
  constructor(
    private apiService: ApiService
  ) { }

  getCondominiums() {
    return this.apiService.get('api/condominium/all');
  }
}
