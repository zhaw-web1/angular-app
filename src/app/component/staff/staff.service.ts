import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
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
          ...doc.payload.doc.data() as any,
          id: doc.payload.doc.id
        }) as Person))
      );
  }

  getStaff(id: string): Observable<Person> {
    return this.firestore.collection('staff').doc(id)
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(action => action.payload.data() as Person)
      );
  }

  createStaff(staff: Person): Promise<DocumentReference> {
    return this.firestore.collection('staff').add(staff);
  }

  updateStaff(id: string, staff: Person): Promise<void> {
    return this.firestore.collection('staff').doc(id).update(staff);
  }

  deleteStaff(id: string): Promise<void> {
    return this.firestore.collection('staff').doc(id).delete();
  }

}
