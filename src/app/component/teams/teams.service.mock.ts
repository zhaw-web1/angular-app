import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceMock {

  constructor() {
  }

  getTeam(id: string): Observable<any> {
    return of({});
  }

  getTeams(): Observable<any[]> {
    return of([]);
  }
}
