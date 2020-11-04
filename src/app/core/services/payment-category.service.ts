import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PaymentCategoryService {

  constructor(
    private apiService: ApiService
  ) { }

  createPaymentCategory(request: any) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    request.condominiumId = userLogged.condominiumId;
    delete request.id;
    return this.apiService.post('api/paymentcategory', request);
  }

  updatePaymentCategory(request: any) {
    return this.apiService.put('api/paymentcategory', request);
  }

  getPaymentCategoryById(buildingId: number) {
    return this.apiService.get(`api/paymentcategory/byId/${buildingId}`);
  }

  getPaymentCategoriesByCondominium(condominiumId?: number) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
    return this.apiService.get('api/paymentcategory/by-condominium/'+ condoId);
  }
}