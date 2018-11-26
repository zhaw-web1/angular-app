import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './match.model';
import {map, shareReplay, tap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {firestore} from 'firebase';

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
        map(snapshots => snapshots.docs.map(snapshot => this.mapIdToMatch(snapshot)))
      );
  }

  getMatch(id: string): Observable<Match> {
    return this.fs.collection('articles').doc(id).get().pipe(
      map(snapshot => this.mapIdToMatch(snapshot))
    );
  }

  private mapIdToMatch(snapshot: firestore.DocumentSnapshot): Match {
    const data: Match = snapshot.data() as Match;
    data.id = snapshot.id;
    return data;
  }
}
