import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuildingService } from 'src/app/core/services/building.service';
import { Building } from 'src/app/core/models/building.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss']
})
export class FlatFormComponent implements OnInit {
  public flatId: number;
  public flatFG: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private buildingService: BuildingService
  ) { }

  reset(){
    this.flatId = null;
    this.flatFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      numberOfHomes: ['',[Validators.required]]
    });
  }

  ngOnInit() {
    this.reset();
    this.route.params.subscribe((params: Params) => {
      this.flatId = params.id;
      if(this.flatId) this.getBuilding();
    });
  }

  getBuilding(){
    this.buildingService.getBuildingById(this.flatId).subscribe(
      (response: any)=>{
        this.flatFG.patchValue(response);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.flatFG.valid){
      let flat: Building = Object.assign({},this.flatFG.value);
      let request: Observable<any>;

      if(!flat.id){
        request = this.buildingService.createBuilding(flat)
      } else {
        request = this.buildingService.updateBuilding(flat)
      }

      request.subscribe(
        (response: any)=>{
          if (!flat.id) this.buildingService.refreshList(true);
          if (flat.id) this.router.navigate(['/buildings']);
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
