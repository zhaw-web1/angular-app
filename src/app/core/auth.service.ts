import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth as fbAuth, User} from 'firebase';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  getUser(): Observable<User | null> {
    return this.afAuth.user;
  }

  getAuthState(): Observable<User | null> {
    return this.afAuth.authState;
  }

  isAdmin(): Observable<boolean> {
    return this.afAuth.idTokenResult.pipe(
      map(token => token && token.claims.admin)
    );
  }

  isAuthorizedUser(): Observable<boolean> {
    return this.isAdmin();
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(state => !!state)
    );
  }

  async login() {
    return await this.afAuth.auth.signInWithRedirect(new fbAuth.GoogleAuthProvider());
  }

  async logout() {
    return await this.afAuth.auth.signOut();
  }

}
