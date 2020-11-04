import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PollService } from 'src/app/core/services/poll.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Poll } from 'src/app/core/models/poll.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.scss']
})
export class PollFormComponent implements OnInit {
  public pollFG: FormGroup;
  public pollId: number;

  constructor(private fb: FormBuilder, private pollService: PollService,
    private router: Router, private route: ActivatedRoute) { }

  reset(){
    this.pollFG = this.fb.group({
      id: [],
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      startDate: ['',[Validators.email]],
      endDate: ['',[Validators.required]],
      status: []
    });
    this.pollId = null;
  }

  ngOnInit() {
    this.reset();
    this.route.params.subscribe((params: Params) => {
      this.pollId = params.id;
      if(this.pollId) this.getPoll();
    });
  }

  getPoll(){
    this.pollService.getPollById(this.pollId).subscribe(
      (response: any)=>{
        this.pollFG.patchValue(response.data);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.pollFG.valid){
      let poll: Poll = Object.assign({},this.pollFG.value);
      let request: Observable<any>;

      if(!poll.id){
        request = this.pollService.createPoll(poll)
      } else {
        request = this.pollService.updatePoll(poll)
      }

      request.subscribe(
        (response: any)=>{
          if (!poll.id) console.log('refresh list');
          if (poll.id) this.router.navigate(['/polls']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.pollFG.value);
    }
  }
}
