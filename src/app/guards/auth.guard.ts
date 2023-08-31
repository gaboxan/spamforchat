import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, CanActivateChildFn, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private afAuth: AngularFireAuth) {}
  canActivate():Observable<boolean>{
    return this.afAuth.authState.pipe(
        map( auth => {
            if(!auth){
                this.route.navigate(['/'])
                return false
            }else{
                return true
            }
        })
    )
  }
}
