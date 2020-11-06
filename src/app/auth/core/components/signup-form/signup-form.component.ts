import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { Condominium } from 'src/app/core/models/condominium.model';
import { BuildingService } from 'src/app/core/services/building.service';
import { Building } from 'src/app/core/models/building.model';
import { USER_ROLE } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public loading: boolean;
  public signupFG: FormGroup;
  public condominiums: Condominium[];
  public buildings: Building[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private condominiumService: CondominiumService,
    private router: Router,
    private buildingService: BuildingService
  ) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      birthDate: ['',[Validators.required]],
      phoneNumber: ['',[Validators.required]],
      genderId: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]]
    });
    this.condominiums = [];
  }

  getCondominiums(){
    this.condominiumService.getCondominiums().subscribe(
      (response: any)=>{
        this.condominiums = response;
      },
      (error: any)=>{
        console.log('error', error);
      }
    );
  }

  getBuildings(){
    this.buildingService.getBuildingsByCondominium(this.signupFG.value.condominiumId).subscribe(
      (response: any)=>{
        this.buildings = response;
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  ngOnInit() {
    this.reset();
    this.getCondominiums();
  }

  condominiumChosed(){
    this.getBuildings();
  }

  onSignup(){
    this.router.navigateByUrl('/auth/code');
    /* if(this.signupFG.valid){
      this.loading = true;
      const signupRequest = Object.assign({},this.signupFG.value);
      signupRequest.role = USER_ROLE.OWNER;

      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            if (response) {
              this.router.navigateByUrl('/');
            }
            this.loading = false;
          },
          (error: any) => {
            this.loading = false;
          }
        );
    } else{
     console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    } */
  }

}
