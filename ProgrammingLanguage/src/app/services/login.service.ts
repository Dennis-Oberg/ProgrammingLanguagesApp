import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((reseolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userInfo => reseolve(userInfo), error => reject(error))
    });
  }

  logOut(){
    this.afAuth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

}
