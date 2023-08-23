import { Component, Inject } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { SpamService } from 'src/services/spam.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {


  onNoClick(): void {
    this.dialog.closeAll();
  }
  email: string = '';
  password: string = '';
  validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  emailValid: boolean = false;
  passValid: boolean = false;
  emailvMsg: string;
  passwordMsg: string;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logingoogle: loginGoogle,
    private route: Router,
    public dialog: MatDialog,
    private spamService:SpamService,
    private _snackBar: MatSnackBar
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
      console.log("campos correctos")
      this.login()
    }
  }
  login(){
    this.logingoogle.login(this.email, this.password)
    .then(res =>{
      this.email = ''
      this.password = ''
      console.log("logueado correctamente")
      this._snackBar.open("Logueado correctamente", "Ok", {
        duration: 5000,  // Establece la duración en milisegundos
        horizontalPosition: 'center',  // Posición horizontal del Snackbar
        verticalPosition: 'bottom'     // Posición vertical del Snackbar
      });      this.onNoClick()

    })
    .catch(error=>{
      alert(error.messages)
    })
  }
  
}
