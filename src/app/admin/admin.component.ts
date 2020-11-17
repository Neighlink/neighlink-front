import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { User } from '../core/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Condominium } from '../core/models/condominium.model';
import { CondominiumService } from '../core/services/condominium.service';
import { MatDialog } from '@angular/material';
import { CondominiumDialogComponent } from '../shared/components/condominium-dialog/condominium-dialog.component';

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
    private condominiumService: CondominiumService,
    public dialog: MatDialog,
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
  }

  getCondominiums(){
    this.condominiums = [
      { id: 1, name: 'Juan de aliaga'},
      { id: 2, name: 'Salaverry'},
    ];
    this.condominiumService.getCondominiums().subscribe(
      (response: any)=>{
        if(response.result.length > 0){
          this.condominiums = response.result;
          localStorage.setItem('condominiums', JSON.stringify(response.result));

          const condominiumSelected = localStorage.getItem('condominium');
          if (condominiumSelected) this.condominiumFG.patchValue(JSON.parse(condominiumSelected));
          else{
            localStorage.setItem('condominium', JSON.stringify(this.condominiums[0]));
            this.condominiumFG.patchValue(this.condominiums[0]);
          }

        } else {
          this.openCondominiumDialog();
        }
      },
      (error: any)=>{
        console.log(error);
        this.condominiums = [];
        this.openCondominiumDialog();
      }
    )
  }

  ngOnInit(){
    this.reset();
    const role = localStorage.getItem('role');
    if (role == USER_ROLE.ADMINISTRATOR) this.getCondominiums();
    else console.log('traer condominios por residente');
  }

  openCondominiumDialog(){
    const dialogRef = this.dialog.open(CondominiumDialogComponent, {
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCondominiums();
      console.log('The dialog was closed', result);
    });
  }

  select(cId: number){
    const c = this.condominiums.find(c => c.id == cId);
    this.condominiumFG.patchValue(c);
    localStorage.setItem('condominium', JSON.stringify(this.condominiumFG.value));
    //window.location.reload();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

}
