import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-subscription-page',
  templateUrl: './premium-subscription-page.page.html',
  styleUrls: ['./premium-subscription-page.page.scss'],
})
export class PremiumSubscriptionPagePage {

  constructor() { }

  // Método para suscribirse a la cuenta premium
  subscribe() {
    // Lógica para procesar la suscripción premium
    // Puedes mostrar mensajes, realizar pagos, etc.
    console.log('Suscripción realizada');
  }

}