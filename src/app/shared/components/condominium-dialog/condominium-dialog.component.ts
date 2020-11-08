import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CondominiumService } from 'src/app/core/services/condominium.service';

@Component({
  selector: 'app-condominium-dialog',
  templateUrl: './condominium-dialog.component.html',
  styleUrls: ['./condominium-dialog.component.scss']
})
export class CondominiumDialogComponent implements OnInit {
  public condominiumFG: FormGroup;

  constructor(
    private condominiumService: CondominiumService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<CondominiumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  reset(){
    this.condominiumFG = this.fb.group({
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      address: ['',[Validators.required]]
    });
  }

  onSubmit(){
    console.log('on submit');
    if(this.condominiumFG.valid){
      let condominium: any = Object.assign({},this.condominiumFG.value);

      this.condominiumService.createCondominium(condominium).subscribe(
        (response: any)=>{
          this.dialogRef.close('Pizza!');
          console.log('r-condominium', response);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.condominiumFG.value);
    }
  }

  ngOnInit() {
    this.reset();
  }

}