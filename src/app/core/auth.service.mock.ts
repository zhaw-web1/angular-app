import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceMock {
  isLoggedIn(): Observable<boolean> {
    return of(true);
  }
}
