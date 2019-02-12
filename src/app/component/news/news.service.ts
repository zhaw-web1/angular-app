import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Page} from '../content-page/page.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: AngularFirestore) { }

  getNewestArticles(limit: number = 3): Observable<Page[]> {
    console.log(`getting ${limit} news articles`);
    return this.firestore
      .collection('pages', ref => ref
        .where('news', '==', true)
        .where('date', '<=', this.getCurrentDate())
        .orderBy('date', 'desc').limit(limit))
      .snapshotChanges()
      .pipe(
        shareReplay(1),
        map(snapshots =>
          snapshots.map(snapshot =>
            ({...snapshot.payload.doc.data(), id: snapshot.payload.doc.id}) as Page))
      );
  }

  getArticles(): Observable<Page[]> {
    return this.firestore
      .collection('pages', ref => ref
        .where('news', '==', true)
        .where('date', '<=', this.getCurrentDate())
        .orderBy('date', 'desc')
      ).snapshotChanges()
      .pipe(
        shareReplay(1),
        map(snapshots =>
          snapshots.map(snapshot =>
            ({...snapshot.payload.doc.data(), id: snapshot.payload.doc.id}) as Page))
      );
  }

  getArticle(id: string): Observable<Page> {
    return this.firestore.collection('articles').doc(id).get().pipe(
      shareReplay(1),
      map(snapshot =>
        ({...snapshot.data(), id: snapshot.id}) as Page)
    );
  }

  private getCurrentDate(): Date {
    const date = new Date();
    const dateString = ''
      + date.getFullYear() + '-'
      + (date.getMonth() + 1) + '-'
      + date.getDate();
    const res = new Date(dateString);
    console.log(`current date: ${res}`);
    return res;
  }
}
