import { Component, Input, OnInit } from '@angular/core';
import { SpamService } from 'src/services/spam.service';
import { Spam } from '../models/spam.model';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-spams-user',
  templateUrl: './spams-user.component.html',
  styleUrls: ['./spams-user.component.css'],
})
export class SpamsUserComponent implements OnInit {
  spamList: Spam[];
  spamNames: string[] = [];
  spam1:string
  constructor(private spamService: SpamService,private db: AngularFirestore) {}
  ngOnInit(): void {
    const correoUsuario = 'gabuito@gmail.con'; // Reemplaza con el correo del usuario

    this.spamService.obtenerSpamsDeUsuario(correoUsuario).subscribe((spams) => {
      this.spamList = [...spams];
      this.spam1= (this.spamList[0]).spam
      console.log("spams: ",this.spamList);
    });
    this.spamService.getDocumentNames(correoUsuario).subscribe((names) => {
      this.spamNames = names;
      console.log("documentos:", this.spamNames);
    });
  }


  

  displayedColumns: string[] = ['titulo', 'contenido'];
}
