import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Person} from '../person';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getStaffTeam(): Observable<Person[]> {
    return this.firestore.collection('staff')
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(docs => docs.map(doc => ({
          ...doc.payload.doc.data(),
          id: doc.payload.doc.id
        }) as Person))
      );
  }

}
