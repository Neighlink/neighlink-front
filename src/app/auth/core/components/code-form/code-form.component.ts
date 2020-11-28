import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.scss']
})
export class CodeFormComponent implements OnInit {
  public loading: boolean;
  public codeFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private analytics: GoogleAnalyticsService,
  ){ }

  reset(){
    this.loading = false;
    this.codeFG = this.fb.group({
      code: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.reset();
  }

  onCode(){
    this.router.navigateByUrl('/');
    this.analytics.values.eventCategory = 'auth';
    this.analytics.values.eventAction = 'code';
    this.analytics.sendToGoogleAnalytics();
    /* if(this.loginFG.valid){
      this.loading = true;
      const loginRequest = Object.assign({},this.loginFG.value);

      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            localStorage.setItem('userLogged', JSON.stringify(response));
            if (response.role == USER_ROLE.ADMINISTRATOR) this.router.navigateByUrl('/users');
            if (response.role == USER_ROLE.OWNER) this.router.navigateByUrl('/payments');
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
