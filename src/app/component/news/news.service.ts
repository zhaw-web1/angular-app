import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './news.model';
import {map, shareReplay, tap} from 'rxjs/operators';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import * as firebase from 'firebase';
import {Page} from '../content-page/page.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: AngularFirestore) { }

  getNewestArticles(limit: number = 3): Observable<Page[]> {
    return this.firestore
      .collection('pages', ref => ref
        .where('news', '==', true)
        .orderBy('date', 'desc').limit(limit))
      .get()
      .pipe(
        shareReplay(1),
        map(snapshots =>
          snapshots.docs.map(snapshot =>
            ({...snapshot.data(), id: snapshot.id}) as Page))
      );
  }

  getArticle(id: string): Observable<Page> {
    return this.firestore.collection('articles').doc(id).get().pipe(
      shareReplay(1),
      map(snapshot =>
        ({...snapshot.data(), id: snapshot.id}) as Page)
    );
  }

}
