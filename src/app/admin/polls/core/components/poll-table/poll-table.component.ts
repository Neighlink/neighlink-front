import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PollFormComponent } from '../poll-form/poll-form.component';
import { Poll } from '../../../../../core/models/poll.model';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

const ELEMENT_DATA: Poll[] = [
  {id: 1,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Hydrogen'},
  {id: 2,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Helium'},
  {id: 3,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Lithium'},
  {id: 4,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Beryllium'},
  {id: 5,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Boron'},
  {id: 6,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Carbon'},
  {id: 7,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Nitrogen'},
  {id: 8,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Oxygen'},
  {id: 9,  title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Fluorine'},
  {id: 10, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Neon'},
  {id: 11, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Sodium'},
  {id: 12, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Magnesium'},
  {id: 13, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Aluminum'},
  {id: 14, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Silicon'},
  {id: 15, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Phosphorus'},
  {id: 16, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Sulfur'},
  {id: 17, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Chlorine'},
  {id: 18, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Argon'},
  {id: 19, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Potassium'},
  {id: 20, title: 'Propietariop', numberOfVotes: 2,status: true, startDate: '10/10/2019/', endDate: '15/10/2019', description: 'Calcium'},
];

@Component({
  selector: 'poll-table',
  templateUrl: './poll-table.component.html',
  styleUrls: ['./poll-table.component.scss']
})
export class PollTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'startDate', 'endDate', 'numberOfVotes', 'status', 'options'];
  dataSource = new MatTableDataSource<Poll>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private analytics: GoogleAnalyticsService,
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PollFormComponent, {
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

  delete(id){
    this.analytics.values.eventCategory = 'poll';
    this.analytics.values.eventAction = 'delete';
    this.analytics.sendToGoogleAnalytics();
    console.log('id', id);
  }
}
