import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { loginGoogle } from 'src/services/loginGoogle.service';
import { SpamService } from 'src/services/spam.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Spam } from '../models/spam.model';


@Component({
  selector: 'app-xd',
  templateUrl: './xd.component.html',
  styleUrls: ['./xd.component.css']
})
export class XdComponent implements OnInit {
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
  emailLogged:string
  spamList: Spam[];
  spamName:string
  mostrarBtns:boolean = false


  DesactivarMayus() {}

  constructor(
  
    private logingoogle: loginGoogle,
    public dialog: MatDialog,
    private spamService:SpamService,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard,

  ) { }
  ngOnInit() {
    this.logingoogle.getAuth().subscribe((auth) => {
      if (auth) {
        this.mostrarBtns= true
        
      } else {
        this.mostrarBtns = false
       
       
      }
    });
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
    this.clipboard.copy(spamConSaltos)
    this._snackBar.open("Mensaje copiado", "Ok",{duration:1500});
  }

  guardarSpam() {

    const spamConSaltos = this.spam.replace(/<br>/g, '\n');
    const guardarSpam ={
      spam:spamConSaltos
    }
    if(this.spamName){
      this.logingoogle.getAuth().subscribe((auth)=>{
        if(auth){
          console.log(auth.email,this.spamName)
          this.spamService.agregarSpam(guardarSpam,auth.email!,this.spamName)
          this._snackBar.open("Spam guardado!", "Ok",{duration:1500});
        }else{
          console.log("nadie logueado")
        }
      })
    }else{
      this._snackBar.open("Debes asignarle un nombre al spam", "Ok",{duration:1500});
    }
  
  }
  verSpams(){
    const correoUsuario = 'gabuito@gmail.con'; // Reemplaza con el correo del usuario
    
    this.spamService.obtenerSpamsDeUsuario(correoUsuario).subscribe(spams => {
      this.spamList = [...spams];
      console.log(this.spamList)
    });
  }
}
