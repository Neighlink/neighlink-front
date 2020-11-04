import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../../../../core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns = ['name', 'lastName', 'email', 'phone', 'buildingId', 'houseNumber', 'options'];
  dataSource = new MatTableDataSource<User>();

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getUsers();
    })
  }

  getUsers(){
    this.userService.getUsersByCondominium().subscribe(
      (response: any) =>{
        this.dataSource = response;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) =>{
        console.log('error', error);
      }
    )
  }

  ngOnInit() {
    this.getUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '50%',
      data: {
        type: 'create',
        info: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }
}
