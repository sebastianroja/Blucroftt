import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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

    // Redirigir a la página de inicio con animación de fade
    this.router.navigate(['/login'], { queryParams: this.formData, state: { animation: 'fade' } });

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
