import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RuleFormComponent } from '../rule-form/rule-form.component';
import { Bill } from '../../../../../core/models/bill.model';
import { RuleService } from 'src/app/core/services/rule.service';

@Component({
  selector: 'rule-table',
  templateUrl: './rule-table.component.html',
  styleUrls: ['./rule-table.component.scss']
})
export class RuleTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'description', 'options'];
  dataSource = new MatTableDataSource<Bill>();

  constructor(
    public dialog: MatDialog,
    private ruleService: RuleService
  ) {
    this.ruleService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getRules();
    })
  }

  getRules(){
    this.ruleService.getRulesByCondominium().subscribe(
      (response: any) =>{
        this.dataSource = response.result;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) =>{
        console.log('error', error);
      }
    )
  }

  ngOnInit() {
    this.getRules();
  }

  openDialog(type: string, bill?): void {
    const dialogRef = this.dialog.open(RuleFormComponent, {
      width: '50%',
      data: {
        type,
        bill
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  deleteElement(element: any){
    this.ruleService.deleteRule(element.id).subscribe(
      (response:any) => {
        this.getRules();
      },
      (error: any) => {
        console.error('error', error);
      }
    )
  }
}
