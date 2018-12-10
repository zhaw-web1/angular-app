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

  getPages(): Observable<Page[]> {
    return this.firestore.collection('pages')
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(docs => docs.map(doc => ({
          ...doc.payload.doc.data(),
          id: doc.payload.doc.id
        }) as Page))
      );
  }


  createPage(page: Page, id?: string): Promise<any> {
    if (id) {
      return this.firestore.collection('pages').doc(id).set(page);
    } else return this.firestore.collection('pages').add(page);
  }

  updatePage(page: Page, id: string): Promise<void> {
    return this.firestore.collection('pages').doc(id).update(page);
  }

  deletePage(id: string): Promise<void> {
    return this.firestore.collection('pages').doc(id).delete();
  }

}
