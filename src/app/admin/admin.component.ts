import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public user: User;
  public userRole = USER_ROLE;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    const userLogged = localStorage.getItem('userLogged');
    if(userLogged) this.user = JSON.parse(userLogged);
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }

  ngOnInit(){}

}
