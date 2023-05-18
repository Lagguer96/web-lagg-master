import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string="";
  password: string="";

  onSubmit() {
    // Aquí puedes implementar la lógica para autenticar al usuario
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
