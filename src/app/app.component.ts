import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SpamService } from 'src/services/spam.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Toggle } from 'src/services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'sfc';
  spamI: string = '';
  spam: string = '';
  lineasSpam: number = 2;
  Mayus: boolean = false;
  spamfC: string = '';
  mostrarCopiar: boolean = false;
  mostrarLLR:boolean = true
  mostrarIniciarSesion: boolean = true;
  mostrarRegistrarse: boolean = true;
  mostrarR:boolean

  DesactivarMayus() {}

  constructor(
    private clipboard: Clipboard,
    private logingoogle: loginGoogle,
    public dialog: MatDialog,
    private spamService:SpamService,
    private _snackBar: MatSnackBar,

  ) { }
  ngOnInit() {
    this.logingoogle.getAuth().subscribe((auth)=>{
      if(auth){
        console.log(auth.email)
        this.mostrarLLR= false
      }else{
        console.log("nadie logueado")
        this.mostrarLLR= true
      }
    })

  }



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
    this._snackBar.open("Mensaje copiado", "Ok",{duration:1500});
  }

  guardarSpam() {
    const spamConSaltos = this.spam.replace(/<br>/g, '\n');
    const guardarSpam ={
      spam:spamConSaltos
    }
    this.logingoogle.getAuth().subscribe((auth)=>{
      if(auth){
        console.log(auth.email)
        this.spamService.agregarSpam(guardarSpam,auth.email!,"spam3")
      }else{
        console.log("nadie logueado")
      }
    })
   
  }
  logOut(){
    this.logingoogle.logout()
    this._snackBar.open("Cerraste sesión exitosamente","Ok",{duration:15000,horizontalPosition:'end',verticalPosition:'top'})

  }
  

  toggleRegistrarse() {
    
    this.mostrarIniciarSesion = !this.mostrarIniciarSesion;
  }
  
}
