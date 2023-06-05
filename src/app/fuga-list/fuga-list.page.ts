import { Component } from '@angular/core';

@Component({
  selector: 'app-fuga-list',
  templateUrl: './fuga-list.page.html',
  styleUrls: ['./fuga-list.page.scss'],
})
export class FugaListPage {
  fugasDeAgua: any[];

  constructor() {
    this.fugasDeAgua = [];
  }

  ionViewWillEnter() {
    // Obtiene los datos de las fugas de agua desde el localStorage
    const fugasData = localStorage.getItem('fugasDeAgua');

    if (fugasData) {
      this.fugasDeAgua = JSON.parse(fugasData);
    }
  }
}
