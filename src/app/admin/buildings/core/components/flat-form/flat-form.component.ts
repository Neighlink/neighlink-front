import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlatService } from 'src/app/core/services/flat.service';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss']
})
export class FlatFormComponent implements OnInit {
  public buildingId: number;
  public type: string;

  public flatId: number;
  public flatFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flatService: FlatService,
    public dialogRef: MatDialogRef<FlatFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.reset();
    if(this.data){
      this.type = this.data.type;
      this.buildingId = Number(this.data.buildingId);
      if(this.data.flat) this.flatFG.patchValue(this.data.flat);
    }
  }

  reset(){
    this.flatId = null;
    this.flatFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      limitRegister: [1,[Validators.required]],
      buildingId: [null],
      secretCode: [null],
    });
  }

  ngOnInit() {
  }

  getFlat(){
    this.flatService.getFlatById(this.flatId).subscribe(
      (response: any)=>{
        this.flatFG.patchValue(response.result);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.flatFG.valid){
      let flat: any = Object.assign({},this.flatFG.value);
      let request: Observable<any>;

      if(!flat.id){
        request = this.flatService.createFlat(flat, this.buildingId)
      } else {
        request = this.flatService.updateFlat(flat)
      }

      request.subscribe(
        (response: any)=>{
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
          this.flatService.refreshList(true);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.flatFG.value);
    }
  }
}
