import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-subscription-page',
  templateUrl: './premium-subscription-page.page.html',
  styleUrls: ['./premium-subscription-page.page.scss'],
})
export class PremiumSubscriptionPagePage {

  constructor() { }

  
  subscribe() {
    
    console.log('Suscripción realizada');
  }

}