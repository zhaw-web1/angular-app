import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Match} from './models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceMock {
  constructor() {
  }

  getNewestMatches(limit = 5): Observable<Match[]> {
      return of([]);
  }

  getMatch(id: string): Observable<any> {
   return of({
   });
  }

  createMatch(match: Match, id?: string) {}

  updateMatch(id: string, match: Match) {}

  deleteMatch(id: string) {

  }

  getMatches(): Observable<Match[]> {
    return of([]);
  }
}
