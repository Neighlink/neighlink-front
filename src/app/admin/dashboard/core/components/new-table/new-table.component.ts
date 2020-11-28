import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';
import { NewsService } from 'src/app/core/services/news.service';
import { NewFormComponent } from '../new-form/new-form.component';

@Component({
  selector: 'news-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['title', 'description', 'options'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    public dialog: MatDialog,
    private newService: NewsService,
    private analytics: GoogleAnalyticsService,
  ) {
    this.newService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getNews();
    })
  }

  getNews(){
    this.newService.getNewsByCondominium().subscribe(
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
    this.getNews();
  }

  openDialog(type: string, news?): void {
    const dialogRef = this.dialog.open(NewFormComponent, {
      width: '50%',
      data: {
        type,
        news
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }

  deleteElement(element: any){
    this.analytics.values.eventCategory = 'news';
    this.analytics.values.eventAction = 'delete';
    this.analytics.sendToGoogleAnalytics();
    this.newService.deleteNew(element.id).subscribe(
      (response:any) => {
        this.getNews();
      },
      (error: any) => {
        console.error('error', error);
      }
    )
  }

}
