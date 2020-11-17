import { Injectable } from "@angular/core";
import { USER_ROLE } from '../constants/global.constants';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

	constructor(public api: ApiService){}

	login(request: any){
		return this.api.post('8092/profiles/users/auth', request);
	}

	signup(request: any){
		if (request.role == USER_ROLE.ADMINISTRATOR){
			delete request.role;
			return this.api.post('8092/profiles/administrators', request);
		} else {
			delete request.role;
			return this.api.post('8092/profiles/residents', request);
		}
	}
}