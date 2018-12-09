import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {SosEvent} from './sos-event.model';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getLatestEvents(limit: number = 3): Observable<SosEvent[]> {
    return this.firestore.collection('events', ref => ref
      .orderBy('date')
      .where('date', '>', this.getCurrentDate())
      .limit(limit)
    ).snapshotChanges().pipe(
      shareReplay(1),
      map(snapshots =>
        snapshots.map(doc => ({
          ...doc.payload.doc.data(),
          id: doc.payload.doc.id
        } as SosEvent)))
    );
  }

  private getCurrentDate(): Date {
    const date = new Date();
    const dateString = ''
      + date.getFullYear() + '-'
      + (date.getMonth() + 1) + '-'
      + date.getDate();
    return new Date(dateString);
  }

}
