import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Page} from './page.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getPage(id: string): Observable<Page> {
    return this.firestore.collection('pages').doc(id)
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(doc => ({...doc.payload.data(), id: doc.payload.id}) as Page)
      );
  }

}
