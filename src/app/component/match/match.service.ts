import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './match.model';
import {map, shareReplay, tap} from 'rxjs/operators';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {firestore} from 'firebase';
import {Team} from '../teams/team.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private fs: AngularFirestore) {
  }

  getNewestMatches(limit = 5): Observable<Match[]> {
    return this.fs
      .collection('matches', ref => ref.orderBy('date', 'desc').limit(limit))
      .get()
      .pipe(
        // Only read once if multiple subscriptions exist
        shareReplay(1),
        // Log amount read to console
        tap(docs => console.log(`read ${docs.size} docs`)),
        // Add Id to object so we can easily link to it
        map(snapshots => snapshots.docs.map(snapshot => this.mapIdAndWinnerToMatch(snapshot)))
      );
  }

  getMatch(id: string): Observable<Match> {
    return this.fs.collection('matches').doc(id).get().pipe(
      map(snapshot => this.mapIdAndWinnerToMatch(snapshot))
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

  private mapIdAndWinnerToMatch(snapshot: firestore.DocumentSnapshot): Match {
    const data: Match = snapshot.data() as Match;
    data.id = snapshot.id;
    this.setWinner(data);
    return data;
  }

  private setWinner(match: Match): Match {
    match.stats[0].winner = match.stats[0].score >= match.stats[1].score;

    match.stats[1].winner = match.stats[0].score <= match.stats[1].score;

    return match;
  }

  getMatches(): Observable<Match[]> {
    return this.fs.collection('matches').snapshotChanges().pipe(
      shareReplay(1),
      map(actions =>
        actions.map(action =>
          ({...action.payload.doc.data(), id: action.payload.doc.id}) as Match
        )
      )
    );
  }
}
