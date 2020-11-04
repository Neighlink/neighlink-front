import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate  {

  constructor(private router: Router){}

  canActivate(): any {
    let token = localStorage.getItem('userLogged');
    if (token) return true;
    this.router.navigateByUrl('/auth');
  }
}