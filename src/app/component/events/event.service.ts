import { Injectable } from '@angular/core';
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
      .where('date', '>', this.getCurrentDate())
      .orderBy('date')
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
    return new Date(''
      + date.getFullYear() + '-'
      + date.getMonth() + '-'
      + date.getDay());
  }

}
