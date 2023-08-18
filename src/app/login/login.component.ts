import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { SpamService } from 'src/services/spam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mostrarLogin: boolean = false;
  validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  emailValid: boolean = false;
  passValid: boolean = false;
  emailvMsg: string;
  passwordMsg: string;
  constructor(
      
    private logingoogle: loginGoogle,
    private route: Router,
    public dialog: MatDialog,
    private spamService:SpamService
  ) {}

  mostrarL(){
    if (this.mostrarLogin) {
      this.mostrarLogin = false;
    } else {
      this.mostrarLogin = true;
    }
  }
  vEmail() {
    console.log(this.email, this.password);
    if (this.email == '') {
      this.emailValid = true;
      this.emailvMsg = 'Rellene el correo porfavor';
    } else {
      if (this.validEmail.test(this.email)) {
        this.emailValid = false;
        this.vPassword();
      } else {
        this.emailValid = true;
        this.emailvMsg = 'Proporciona un correo valido por favor';
      }
    }
  }
  vPassword() {
    if (this.password == '' || this.password.length < 6) {
      this.passValid = true;
      this.passwordMsg = 'Proporcione una contraseña de más de 5 digitos ';
    } else {
      console.log("campos correctos")
      this.login()
    }
  }
  login(){
    this.logingoogle.login(this.email, this.password)
    .then(res =>{
      this.mostrarLogin = false
      this.email = ''
      this.password = ''
      console.log("logueado correctamente")
    })
    .catch(error=>{
      alert(error.messages)
    })
  }
}
