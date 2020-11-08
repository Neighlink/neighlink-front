import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public loading: boolean;
  public signupFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      birthDate: ['',[Validators.required]],
      email: ['',[Validators.email]],
      gender: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      name: ['',[Validators.required]],
      password: ['',[Validators.required]],
      phone: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.reset();
  }

  onSignup(){
    if(this.signupFG.valid){
      this.loading = true;
      const signupRequest = Object.assign({},this.signupFG.value);
      signupRequest.role = USER_ROLE.OWNER;

      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            if (response) {
              //message de sucess register
              this.router.navigateByUrl('/auth');
            }
            this.loading = false;
          },
          (error: any) => {
            this.loading = false;
          }
        );
    } else{
     console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
