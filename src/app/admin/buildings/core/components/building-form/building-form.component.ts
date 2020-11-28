import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuildingService } from 'src/app/core/services/building.service';
import { Building } from 'src/app/core/models/building.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit {
  public buildingId: number;
  public buildingFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private _snackBar: MatSnackBar,
    private analytics: GoogleAnalyticsService,
  ) { }

  reset(){
    this.buildingId = null;
    this.buildingFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.reset();
    this.route.params.subscribe((params: Params) => {
      console.log('params', params);
      this.buildingId = Number(params.id);
      if(this.buildingId) this.getBuilding();
    });
  }

  getBuilding(){
    this.buildingService.getBuildingById(this.buildingId).subscribe(
      (response: any)=>{
        this.buildingFG.patchValue(response.result);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.buildingFG.valid){
      let building: Building = Object.assign({},this.buildingFG.value);
      let request: Observable<any>;

      this.analytics.values.eventCategory = 'building';
      if(!building.id){
        this.analytics.values.eventAction = 'create';
        request = this.buildingService.createBuilding(building)
      } else {
        this.analytics.values.eventAction = 'update';
        request = this.buildingService.updateBuilding(building)
      }
      this.analytics.sendToGoogleAnalytics();

      request.subscribe(
        (response: any)=>{
          if (!building.id) this.buildingService.refreshList(true);
          if (building.id) this.router.navigate(['/buildings']);
          this._snackBar.open('Operación exitosa ✔️', '', {
            duration: 1000, horizontalPosition: 'end', verticalPosition: 'top', panelClass: ['color-snackbar']
          });
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.buildingFG.value);
    }
  }

}
