import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Obtener los datos almacenados
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      // Comprobar si los datos ingresados coinciden con los almacenados
      const userData = JSON.parse(storedData);
      if (
        userData.email === this.formData.email &&
        userData.password === this.formData.password
      ) {
        // Inicio de sesión exitoso, redirigir al home
        alert('Credenciales validas');
        this.router.navigateByUrl('/home');
      } else {
        // Datos de inicio de sesión incorrectos
        alert('Credenciales inválidas');
      }
    } else {
      // No hay datos de usuario almacenados
      alert('No existe una cuenta registrada');
    }
  }
}