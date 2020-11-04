import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models/news.model';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})

export class NewFormComponet implements OnInit {
  public newId: number;
  public newFg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ){}

  reset(){
    this.newId = null;
    this.newFg = this.fb.group({
      id: [],
      title: ['', [Validators.required]],
      description: ['',[Validators.required]],
      date: ['',[Validators.required]]
    });
}

  ngOnInit(){
    this.reset();
    this.route.params.subscribe((params: Params) => {
      this.newId = params.id;
      if(this.newId) this.getNew();
    });
}

getNew(){
  this.newsService.getNewById(this.newId).subscribe(
    (response: any)=>{
      this.newFg.patchValue(response);
    },
    (error: any)=>{
      console.log('error',error);
    }
  )
}

onSubmit(){
  if(this.newFg.valid){
    let news: News = Object.assign({},this.newFg.value);
    let request: Observable<any>;

    if(!news.id){
      request = this.newsService.createNews(news)
    }else{
      request = this.newsService.updateNews(news)
    }
    request.subscribe(
      (response: any) =>{
        if(!news.id) this.newsService.refreshList(true);
        if(news.id) this.router.navigate(['/new']);
      },
      (error: any)=>{
        console.log('error',error);
      }
    );
  }else{
    console.log('invalid form', this.newFg.value);
  }
}

  
}
