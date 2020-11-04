import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { BuildingService } from 'src/app/core/services/building.service';
import { User } from 'src/app/core/models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Building } from 'src/app/core/models/building.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userId: number;
  public userFG: FormGroup;
  public buildings: Building[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private buildingService: BuildingService
  ) { }

  reset(){
    this.userId = null;
    this.userFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      role: ['',[Validators.required]],
      buildingId: [],
      houseNumber: [],
    });
    this.buildings = [];
  }

  getBuildings(){
    this.buildingService.getBuildingsByCondominium().subscribe(
      (response) => {
        this.buildings = response;
      },
      (error) => {
        console.log('error', error)
      }
    )
  }

  ngOnInit() {
    this.reset();
    this.getBuildings();
    this.route.params.subscribe((params: Params) => {
      this.userId = params.id;
      if(this.userId) this.getUser();
    });
  }

  getUser(){
    this.userService.getUserById(this.userId).subscribe(
      (response: any)=>{
        this.userFG.patchValue(response);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.userFG.valid){
      let user: User = Object.assign({},this.userFG.value);
      let request: Observable<any>;

      if(!user.id){
        request = this.userService.createUser(user)
      } else {
        request = this.userService.updateUser(user)
      }

      request.subscribe(
        (response: any)=>{
          if (!user.id) this.userService.refreshList(true);
          if (user.id) this.router.navigate(['/users']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.userFG.value);
    }
  }
}
