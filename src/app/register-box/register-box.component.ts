import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Toggle } from 'src/services/toggle.service';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent {
  email: string = '';
  password: string = '';
  validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  emailValid: boolean = false;
  passValid: boolean = false;
  emailvMsg: string;
  passwordMsg: string;
  constructor(
    public dialogRef: MatDialogRef<RegisterBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logingoogle: loginGoogle,
    public dialog: MatDialog,
    private toggleservice: Toggle
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
    this.toggleservice.open(DialogBoxComponent);
  }

  register(email: string, password: string) {
    this.logingoogle
      .registrarse(email, password)
      .then((res) => {
        
        this.email = '';
        this.password = '';
        console.log(res);
        this.onNoClick()
        this.logingoogle.logout()
        this.openDialog();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
}
