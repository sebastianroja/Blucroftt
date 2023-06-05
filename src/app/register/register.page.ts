import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Guardar datos en el almacenamiento local
    localStorage.setItem('userData', JSON.stringify(this.formData));

    // Limpiar los datos del formulario
    this.limpiarCampos();

    // Redirigir a la página de inicio
    this.router.navigate(['/home'], { queryParams: this.formData });

    // Mostrar mensaje de éxito
    alert('Registro exitoso');
  }

  limpiarCampos() {
    this.formData = {
      name: '',
      email: '',
      password: ''
    };
  }
}
