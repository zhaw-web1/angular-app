import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './news.model';
import {map, shareReplay, tap} from 'rxjs/operators';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: AngularFirestore) { }

  getNewestArticles(limit: number = 3): Observable<News[]> {
    return this.firestore
      .collection('articles', ref => ref.orderBy('date', 'desc').limit(limit))
      .get()
      .pipe(
        shareReplay(1),
        tap(docs => console.log(`read ${docs.size} docs`)),
        map(snapshots => snapshots.docs.map(snapshot => this.mapIdToNews(snapshot)))
      );
  }

  getArticle(id: string): Observable<News> {
    return this.firestore.collection('articles').doc(id).get().pipe(
      map(snapshot => this.mapIdToNews(snapshot))
    );
  }

  private mapIdToNews(snapshot: DocumentSnapshot): News {
    const data: News = snapshot.data() as News;
    data.id = snapshot.id;
    return data;
  }

}
