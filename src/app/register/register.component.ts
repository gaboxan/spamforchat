import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { RegisterBoxComponent } from '../register-box/register-box.component';
import { Toggle } from 'src/services/toggle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    public dialog: MatDialog,
    private toggleservice:Toggle
  ) {}

  openDialog() {
   
    this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: 'right Click',
    });
  }

  openRegisterBox() {
    this.dialog.open(RegisterBoxComponent, {
      width: '250px',
      data: 'right Click',
      disableClose:true
    });
  }
}
