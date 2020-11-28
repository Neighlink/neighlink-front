import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/services/news.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})

export class NewFormComponent implements OnInit {
  public type: string;
  public ruleFG: FormGroup;
  public ruleId: number;

  constructor(
    private fb: FormBuilder,
    private newService: NewsService,
    public dialogRef: MatDialogRef<NewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private analytics: GoogleAnalyticsService,
  ) {
    this.reset();

    if(this.data){
      this.type = this.data.type;
      if(this.data.news) this.ruleFG.patchValue(this.data.news);
    }
  }

  reset(){
    this.ruleId = null;
    this.ruleFG = this.fb.group({
      id: [],
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.ruleFG.valid){
      let rule: any = Object.assign({},this.ruleFG.value);
      let request: Observable<any>;

      this.analytics.values.eventCategory = 'news';
      if(!rule.id){
        this.analytics.values.eventAction = 'create';
        request = this.newService.createNew(rule)
      } else {
        this.analytics.values.eventAction = 'update';
        request = this.newService.updateNew(rule)
      }
      this.analytics.sendToGoogleAnalytics();

      request.subscribe(
        (response: any)=>{
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
          this.newService.refreshList(true);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.ruleFG.value);
    }
  }
}
