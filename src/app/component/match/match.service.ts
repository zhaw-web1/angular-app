import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Match} from './match.model';
import {Team} from './team.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
// TODO: carlo plz connect this to firebase so when can use real firestore data instead of this fake data
  constructor() {
  }

  getNewestMatches(): Observable<Match[]> {
    const team1: Team = {id: 1, name: 'team1', logoUrl: 'https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/'};
    const team2: Team = {id: 2, name: 'team2', logoUrl: 'https://www.pexels.com/photo/animal-pet-eyes-fur-87413/'};

    const matches: Match[] = [
      {id: 1, team1: team1, team1score: 100, team2: team2, team2score: 99, date: new Date('2018-10-27')},
      {id: 2, team1: team1, team1score: 100, team2: team2, team2score: 130, date: new Date('2018-10-03')},
    ];

    return of(matches);
  }
}
