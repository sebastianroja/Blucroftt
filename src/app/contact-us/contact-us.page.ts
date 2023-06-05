import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage {

  constructor(private alertController: AlertController) { }

  async submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario o realizar alguna acción adicional

    // Mostrar alerta de envío exitoso
    const alert = await this.alertController.create({
      header: '¡Envío Exitoso!',
      message: 'Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.',
      buttons: ['OK']
    });

    await alert.present();

    // Limpiar los campos del formulario
    const inputs = document.querySelectorAll('ion-input');
    inputs.forEach((input: any) => {
      input.value = '';
    });

    const textarea = document.querySelector('ion-textarea');
    if (textarea) {
      textarea.value = '';
    }
  }

}