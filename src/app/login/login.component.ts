import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginBoxComponent } from '../login-box/login-box.component';
import { RegisterBoxComponent } from '../register-box/register-box.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginBoxComponent, {
      width: '250px',
      data: 'right Click',
      disableClose:true
    });
  }
}
