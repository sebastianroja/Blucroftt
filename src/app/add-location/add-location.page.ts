import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage {
  ubicacion: string;
  descripcion: string;

  constructor(private router: Router, private toastController: ToastController) {
    this.ubicacion = '';
    this.descripcion = '';
  }

  async guardarUbicacion() {
    const nuevaFuga = {
      ubicacion: this.ubicacion,
      descripcion: this.descripcion,
    };

    const existingData = localStorage.getItem('fugasDeAgua');
    let fugasDeAgua = [];

    if (existingData) {
      fugasDeAgua = JSON.parse(existingData);
    }

    fugasDeAgua.push(nuevaFuga);

    localStorage.setItem('fugasDeAgua', JSON.stringify(fugasDeAgua));

    const toast = await this.toastController.create({
      message: 'Fuga de agua registrada correctamente',
      duration: 2000, // Duración en milisegundos
    });

    await toast.present();

    this.router.navigate(['/fuga-list']);
  }
}

