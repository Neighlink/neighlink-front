import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PollService {

  constructor(
    private apiService: ApiService
  ) { }

  createPoll(request: any) {
    return this.apiService.post('api/poll', request);
  }

  updatePoll(request: any) {
    return this.apiService.put('api/poll', request);
  }

  getPolls() {
    return this.apiService.get('api/poll/all');
  }

  getPollById(pollId: number) {
    return this.apiService.get(`api/poll/byId/${pollId}`);
  }
}
