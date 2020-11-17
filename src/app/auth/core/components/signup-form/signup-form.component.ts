import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { MatSnackBar } from '@angular/material';

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
    private _snackBar: MatSnackBar,
  ) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      role: ['',[Validators.required]],
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
      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            if (response) {
              this._snackBar.open('Registro exitoso ✔️', '', {
                duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
              });
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
