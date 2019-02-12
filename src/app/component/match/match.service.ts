import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './models/match.model';
import {map, shareReplay, tap} from 'rxjs/operators';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {firestore} from 'firebase';
import {MatchWinner} from './models/match-winner.enum';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private fs: AngularFirestore) {
  }

  private static setWinner(match: Match): Match {
    if (match.finalScores.team1 > match.finalScores.team2) {
      match.winner = MatchWinner.Team1;
    } else if (match.finalScores.team1 < match.finalScores.team2) {
      match.winner = MatchWinner.Team2;
    } else {
      match.winner = MatchWinner.Tie;
    }

    return match;
  }

  private static mapIdAndWinnerToMatch(snapshot: firestore.DocumentSnapshot): Match {
    const data: Match = snapshot.data() as Match;
    data.id = snapshot.id;
    MatchService.setWinner(data);
    return data;
  }

  getNewestMatches(limit = 5): Observable<Match[]> {
    return this.fs
      .collection('matches', ref => ref.orderBy('date', 'desc').limit(limit))
      .get()
      .pipe(
        // Only read once if multiple subscriptions exist
        shareReplay(1),
        // Add Id to object so we can easily link to it
        map(snapshots => snapshots.docs.map(snapshot => MatchService.mapIdAndWinnerToMatch(snapshot)))
      );
  }

  getMatch(id: string): Observable<Match> {
    return this.fs.collection('matches').doc(id).get().pipe(
      map(snapshot => MatchService.mapIdAndWinnerToMatch(snapshot))
    );
  }

  createMatch(match: Match, id?: string): Promise<DocumentReference | void> {
    if (id) {
      return this.fs.collection('matches').doc(id).set(match);
    }
    return this.fs.collection('matches').add(match);
  }

  updateMatch(id: string, match: Match): Promise<void> {
    return this.fs.collection('matches').doc(id).update(match);
  }

  deleteMatch(id: string): Promise<void> {
    return this.fs.collection('matches').doc(id).delete();
  }

  getMatches(): Observable<Match[]> {
    return this.fs.collection('matches').snapshotChanges().pipe(
      shareReplay(1),
      map(actions =>
        actions.map(action =>
          ({...action.payload.doc.data(), id: action.payload.doc.id}) as Match
        )
      ),
      map(matches => matches.map(match => MatchService.setWinner(match)))
    );
  }
}
