import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string='';
  correo: string='';

  constructor() {

    
    // Obtener los datos del usuario desde el almacenamiento local
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      this.nombre = user.name;
      this.correo = user.email;
    }
  }
}
