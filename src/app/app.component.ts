import { Component, OnInit } from '@angular/core';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sfc';
  spamI: string = '';
  spam: string = '';
  lineasSpam: number = 2;
  Mayus: boolean = false;
  spamfC: string = '';
  mostrarCopiar: boolean = false;
  mostrarLLR: boolean = true;
  mostrarIniciarSesion: boolean = true;
  mostrarRegistrarse: boolean = true;
  mostrarR: boolean;
  emailLogged: string;

  DesactivarMayus() {}

  constructor(
    private logingoogle: loginGoogle,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router:Router
  ) {}
  ngOnInit() {
    this.logingoogle.getAuth().subscribe((auth) => {
      if (auth) {
        console.log(auth.email);
        this.emailLogged = auth.email || '';
        this.mostrarLLR = false;
        
      } else {
        console.log('nadie logueado');
        this.mostrarLLR = true;
       
      }
    });
  }

  logOut() {
    this.logingoogle.logout();
    this.router.navigate(['/'])
    this._snackBar.open('Cerraste sesión exitosamente', 'Ok', {
      duration: 15000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    
  }
}
