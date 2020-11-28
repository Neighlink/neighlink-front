import { Injectable } from '@angular/core';
declare var ga: any;

@Injectable()
export class GoogleAnalyticsService {
  public values = {
    hitType: 'event',
    eventCategory: '',
    eventAction: '',
    eventLabel: '',
    eventValue: 0
  };

  constructor() { }

  public sendToGoogleAnalytics() {
    try {
      ga('send', this.values);
    } catch (error) {

    }
  }
}
