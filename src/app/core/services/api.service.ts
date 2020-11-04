import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  private backendUrl: string;

    constructor(private http: HttpClient) {
      this.backendUrl = environment.backendUrl;
    }

    public get(path: string, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
      options = options || {};
      return this.http.get(`${this.backendUrl}${path}`, { params: options.params, headers: options.headers });
    }

    public post(path: string, body?: any, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
      options = options || {};
      return this.http.post(`${this.backendUrl}${path}`, body, { params: options.params, headers: options.headers });
    }

    public put(path: string, body?: any, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
      options = options || {};
      return this.http.put(`${this.backendUrl}${path}`, body, { params: options.params, headers: options.headers });
    }

    public delete(path: string, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
      options = options || {};
      return this.http.delete(`${this.backendUrl}${path}`, { params: options.params, headers: options.headers });
    }
}
