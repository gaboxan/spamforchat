import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Observable, map } from 'rxjs';
import { Spam } from 'src/app/models/spam.model';
@Injectable()
export class SpamService {
  spamNames: string[] = [];
    usuarioColeccion: AngularFirestoreCollection<Spam>;
    usuarioDoc!: AngularFirestoreDocument<Spam>;
    spams!: Observable<Spam[]>;
    spam!: Observable<Spam>;
    constructor(private db: AngularFirestore) {
        this.usuarioColeccion = db.collection('spams', (ref) =>
          ref.orderBy('nombre', 'asc')
        );
      }

      agregarSpam(spam: Spam, correoUsuario: string, nombreSpam:string) {
        return this.db.collection(`users/${correoUsuario}/spams`).doc(nombreSpam).set(spam);
       
    }
    obtenerSpamsDeUsuario(correoUsuario: string): Observable<Spam[]> {
      const collectionRef: AngularFirestoreCollection<Spam> = this.db.collection(`users/${correoUsuario}/spams`);
      
      return collectionRef.valueChanges();
    }
    getDocumentNames(userEmail: string): Observable<string[]> {
      return this.db
        .collection('users')
        .doc(userEmail)
        .collection('spams')
        .snapshotChanges()
        .pipe(
          map((snapshot) => snapshot.map((doc) => doc.payload.doc.id))
        );
    }
}