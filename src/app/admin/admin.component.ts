import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { User } from '../core/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public condominiumFG: FormGroup;
  public condominiums: any[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private fb: FormBuilder,
  ) {
    const userLogged = localStorage.getItem('userLogged');
    if(userLogged){
      this.user = JSON.parse(userLogged);
    }
  }

  reset(){
    this.condominiumFG = this.fb.group({
      id: [null,[Validators.required]],
      name: ['',[Validators.required]],
    });
    this.condominiums = [
      { id: 1, name: 'Juan de aliaga'},
      { id: 2, name: 'Salaverry'},
    ];
    const condominium = localStorage.getItem('condominium');
    if (condominium) this.condominiumFG.patchValue(JSON.parse(condominium));
    else this.condominiumFG.patchValue(this.condominiums[0]);
  }

  ngOnInit(){
    this.reset();
  }

  select(cId: number){
    const c = this.condominiums.find(c => c.id == cId);
    this.condominiumFG.patchValue(c);
    localStorage.setItem('condominium', JSON.stringify(this.condominiumFG.value));
    //window.location.reload();
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }

}
