import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginGoogle } from 'src/services/loginGoogle.service';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environments } from 'src/environments/environment';
import {MatDialogModule} from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';

// import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';






@NgModule({
  declarations: [
    AppComponent,


    DialogBoxComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environments.firestore,'spamforchatv2'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
   

  ],
  providers: [loginGoogle],
  bootstrap: [AppComponent]
})
export class AppModule { }
