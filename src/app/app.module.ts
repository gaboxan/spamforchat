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
import {MatInputModule} from '@angular/material/input';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SpamService } from 'src/services/spam.service';
import {MatButtonModule} from '@angular/material/button';







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
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
   

  ],
  providers: [loginGoogle,SpamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
