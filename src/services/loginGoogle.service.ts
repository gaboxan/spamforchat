import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";



@Injectable({providedIn: 'root'})
export class loginGoogle{
  constructor(private authService: AngularFireAuth, private route: Router){
        
  }
  registrarse(email:string, password:string){
    return new Promise((resolve, reject)=>{
        this.authService.createUserWithEmailAndPassword(email,password)
        .then(datos => resolve(datos),
        error=> reject(error)
        )
    })

}
login(email:string, password:string){
  return new Promise((resolve, reject)=>{
      this.authService.signInWithEmailAndPassword(email,password)
      .then(datos => resolve(datos)),
          (            Error: any) => reject(Error)
      
  })
}
  
}