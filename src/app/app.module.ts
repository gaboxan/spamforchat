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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SpamService } from 'src/services/spam.service';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { RegisterBoxComponent } from './register-box/register-box.component';
import { Toggle } from 'src/services/toggle.service';
import { SpamsUserComponent } from './spams-user/spams-user.component';
import { AppRoutingModule } from './app-routing.module';
import { XdComponent } from './xd/xd.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';








@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
      RegisterComponent,
      LoginComponent,
      LoginBoxComponent,
      RegisterBoxComponent,
      SpamsUserComponent,
      XdComponent,
      NotFoundComponent,
      


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
    MatButtonModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule
    
   

  ],
  providers: [loginGoogle,SpamService,Toggle,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
