// app.component.ts
import { Component, Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sftc';
  spamI: string = '';
  spam: string = '';
  lineasSpam: number = 2;
  Mayus: boolean = false;
  spamfC: string = '';
  mostrarCopiar: boolean = false;
  email: string = '';
  password: string = '';
  mostrarRegistro: boolean = false;
  validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  emailValid: boolean = false;
  passValid: boolean = false;
  emailvMsg: string;
  passwordMsg: string;

  DesactivarMayus() {}
  constructor(private clipboard: Clipboard, private logingoogle: loginGoogle, private route:Router) {}
  spamear() {
    this.mostrarCopiar = true;
    this.spam = '';
    if (this.Mayus) {
      for (let i = 0; i < this.lineasSpam; i++) {
        this.spam += this.spamI + '<br>';
      }
    } else {
      for (let i = 0; i < this.lineasSpam; i++) {
        this.spam += this.spamI.toUpperCase() + '<br>';
      }
    }
  }
  copiar() {
    const spamConSaltos = this.spam.replace(/<br>/g, '\n');
    this.clipboard.copy(spamConSaltos);
  }
  vEmail() {
    console.log(this.email, this.password);
    if (this.email == '') {
      this.emailValid = true;
      this.emailvMsg = 'Rellene el correo porfavor';
    } else {
      if (this.validEmail.test(this.email)) {
        this.emailValid= false;
        this.vPassword()
      } else {
        this.emailValid = true;
        this.emailvMsg = 'Proporciona un correo valido por favor';
      }
    }
  }
  vPassword(){
    if(this.password == '' || this.password.length < 6){
      this.passValid= true
      this.passwordMsg ='Proporcione una contraseña de más de 5 digitos '
    }else{
      
      this.register(this.email,this.password)
    }
  }
  register(email: string, password: string) {
    this.logingoogle
      .registrarse(email, password)
      .then((res) => {
        alert("Usuario creado correctamente; ahora inicia sesión")
        this.email = ''
        this.password =''
        this.mostrarRegistro= false
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  mostrarR() {
    if (this.mostrarRegistro) {
      this.mostrarRegistro = false;
    } else {
      this.mostrarRegistro = true;
    }
  }
}
