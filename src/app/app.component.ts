// app.component.ts
import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SpamService } from 'src/services/spam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'sftc';
  spamI: string = '';
  spam: string = '';
  lineasSpam: number = 2;
  Mayus: boolean = false;
  spamfC: string = '';
  mostrarCopiar: boolean = false;
  mostrarLLR:boolean = true
 

  DesactivarMayus() {}

  constructor(
    private clipboard: Clipboard,
    private logingoogle: loginGoogle,
    private route: Router,
    public dialog: MatDialog,
    private spamService:SpamService
  ) {}
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
  }
}
