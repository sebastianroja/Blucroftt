import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  correo: string = '';
  showOptions: boolean = false;

  constructor(private router: Router) {
    // Obtener los datos del usuario desde el almacenamiento local
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      this.nombre = user.name;
      this.correo = user.email;
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}