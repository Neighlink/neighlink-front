import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { RuleService } from 'src/app/core/services/rule.service';

@Component({
  selector: 'rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
  public type: string;
  public ruleFG: FormGroup;
  public ruleId: number;

  constructor(
    private fb: FormBuilder,
    private ruleService: RuleService,
    public dialogRef: MatDialogRef<RuleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.reset();

    if(this.data){
      this.type = this.data.type;
      if(this.data.rule) this.ruleFG.patchValue(this.data.rule);
    }
  }

  reset(){
    this.ruleId = null;
    this.ruleFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.ruleFG.valid){
      let rule: any = Object.assign({},this.ruleFG.value);
      let request: Observable<any>;

      if(!rule.id){
        request = this.ruleService.createRule(rule)
      } else {
        request = this.ruleService.updateRule(rule)
      }

      request.subscribe(
        (response: any)=>{
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
          this.ruleService.refreshList(true);
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
