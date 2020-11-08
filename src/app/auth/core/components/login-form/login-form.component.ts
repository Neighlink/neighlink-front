import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/core/constants/global.constants';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loading: boolean;
  public loginFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ){ }

  reset(){
    this.loading = false;
    this.loginFG = this.fb.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.reset();
  }

  onLogin(){
    if(this.loginFG.valid){
      this.loading = true;
      const loginRequest = Object.assign({},this.loginFG.value);

      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            let user = response.result.user;
            user.id = response.result.id;
            localStorage.setItem('userLogged', JSON.stringify(user));
            localStorage.setItem('token', response.result.user.token);

            this._snackBar.open('¡Hola de nuevo!', '', {
              duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
            });
            this.router.navigateByUrl('/');
            /* if (response.role == USER_ROLE.ADMINISTRATOR) this.router.navigateByUrl('/users');
            if (response.role == USER_ROLE.OWNER) this.router.navigateByUrl('/payments'); */
            this.loading = false;
          },
          (error: any) => {
            this._snackBar.open('Usuario no encontrado ❌', '', {
              duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
            });
            this.loading = false;
          }
        );
    } else{
      console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
