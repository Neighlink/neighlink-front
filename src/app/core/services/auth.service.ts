import { Injectable } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

	constructor(public api: ApiService){}

	login(request: any){
		return this.api.post('8092/profiles/administrators/auth', request);
	}

	signup(request: any){
		return this.api.post('8092/profiles/administrators', request);
	}
}