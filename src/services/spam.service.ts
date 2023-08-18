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
    usuarioColeccion: AngularFirestoreCollection<Spam>;
    usuarioDoc!: AngularFirestoreDocument<Spam>;
    spams!: Observable<Spam[]>;
    spam!: Observable<Spam>;
    constructor(private db: AngularFirestore) {
        this.usuarioColeccion = db.collection('spams', (ref) =>
          ref.orderBy('nombre', 'asc')
        );
      }

      agregarSpam(spam: Spam) {
        this.usuarioColeccion.add(spam);
      }
}