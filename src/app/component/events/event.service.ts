import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {SosEvent} from './sos-event.model';
import {map, shareReplay} from 'rxjs/operators';
import {Match} from '../match/models/match.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  getEvents(): Observable<SosEvent[]> {
    return this.firestore.collection('events', ref => ref
      .orderBy('date')
    ).snapshotChanges().pipe(
      shareReplay(1),
      map(snapshots =>
        snapshots.map(doc => ({
          ...(doc.payload.doc.data() as any),
          id: doc.payload.doc.id
        } as SosEvent)))
    );
  }

  getLatestEvents(limit: number = 3): Observable<SosEvent[]> {
    return this.firestore.collection('events', ref => ref
      .orderBy('date')
      .where('date', '>', this.getCurrentDate())
      .limit(limit)
    ).snapshotChanges().pipe(
      shareReplay(1),
      map(snapshots =>
        snapshots.map(doc => ({
          ...doc.payload.doc.data() as any,
          id: doc.payload.doc.id
        } as SosEvent)))
    );
  }

  getEvent(id: string): Observable<SosEvent> {
    return this.firestore.collection('events').doc(id).get().pipe(
      map(snapshot => ({
        ...snapshot.data(),
        id: snapshot.id
      }) as SosEvent)
    );
  }

  createEvent(event: SosEvent): Promise<DocumentReference> {
    return this.firestore.collection('events').add(event);
  }

  updateEvent(id: string, event: SosEvent): Promise<void> {
    return this.firestore.collection('events').doc(id).update(event);
  }

  deleteEvent(id: string): Promise<void> {
    return this.firestore.collection('events').doc(id).delete();
  }

  private getCurrentDate(): Date {
    return new Date();
  }

}
