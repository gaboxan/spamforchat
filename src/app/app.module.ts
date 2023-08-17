import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginGoogle } from 'src/services/loginGoogle.service';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environments } from 'src/environments/environment';
// import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';






@NgModule({
  declarations: [
    AppComponent,
    // MensajeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environments.firestore,'spamforchatv2'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  providers: [loginGoogle],
  bootstrap: [AppComponent]
})
export class AppModule { }
