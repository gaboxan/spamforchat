import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { SpamService } from 'src/services/spam.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  mostrarRegistro: boolean = false;
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
      this.register(this.email, this.password);
    }
  }
  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: 'right Click',
    });
  }

  register(email: string, password: string) {
   
    this.logingoogle
      .registrarse(email, password)
      .then((res) => {
        this.openDialog();
        this.email = '';
        this.password = '';
        this.mostrarRegistro = false;
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
