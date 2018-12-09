import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentReference, DocumentSnapshot} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Team} from './team.model';
import {map, shareReplay} from 'rxjs/operators';
import {News} from '../news';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getTeams(): Observable<Team[]> {
    return this.firestore.collection('teams')
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(actions => actions.map(action => this.mapIdToTeam(action)))
      );
  }

  createTeam(team: Team, id?): Promise<DocumentReference | void> {
    if (id) {
      return this.firestore.collection('teams').doc(id).set(team);
    }
    return this.firestore.collection('teams').add(team);
  }

  updateTeam(id: string, team: Team): Promise<void> {
    return this.firestore.collection('teams').doc(id).update(team);
  }

  private mapIdToTeam(snapshot: DocumentChangeAction<any>): Team {
    const data: Team = snapshot.payload.doc.data() as Team;
    data.id = snapshot.payload.doc.id;
    return data;
  }

  getTeam(id: string): Observable<Team> {
    return this.firestore.collection('teams').doc(id)
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(action => action.payload.data() as Team)
      );
  }

  deleteTeam(id: string): Promise<void> {
    return this.firestore.collection('teams').doc(id).delete();
  }
}
