import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Page} from '../content-page/page.model';
import {firestore} from 'firebase';
import {Content, Title} from '../content-page';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceMock {

  constructor() { }

  // getNewestArticles(limit: number = 3): Observable<Page[]> {
  //   return this.firestore
  //     .collection('pages', ref => ref
  //       .where('news', '==', true)
  //       .where('date', '<=', this.getCurrentDate())
  //       .orderBy('date', 'desc')
  //       .limit(limit)
  //     ).snapshotChanges()
  //     .pipe(
  //       shareReplay(1),
  //       map(snapshots =>
  //         snapshots.map(snapshot =>
  //           ({...snapshot.payload.doc.data(), id: snapshot.payload.doc.id}) as Page))
  //     );
  // }

  getArticles(): Observable<Page[]> {
    const title: Title = {
      type: 'title',
      title: 'Article Title'
    };
    const page1: Page = {
      id: '0',
      title: 'Article 1',
      usesNewImage: true,
      image: 'https://console.firebase.google.com/u/1/project/scythe-of-seraph-e7412/storage/' +
        'scythe-of-seraph-e7412.appspot.com/files~2Fcontent-page~2Fimages~2Fthe-first-lan~2F',
      news: true,
      date: firestore.Timestamp.now(),
      content: [title]
    };
    const page2: Page = {
      id: '1',
      title: 'Article 2',
      usesNewImage: true,
      image: 'https://console.firebase.google.com/u/1/project/scythe-of-seraph-e7412/storage/' +
        'scythe-of-seraph-e7412.appspot.com/files~2Fcontent-page~2Fimages~2Fthe-first-lan~2F',
      news: true,
      date: firestore.Timestamp.now(),
      content: [title]
    };
    const page3: Page = {
      id: '2',
      title: 'Article 3',
      usesNewImage: true,
      image: 'https://console.firebase.google.com/u/1/project/scythe-of-seraph-e7412/storage/' +
        'scythe-of-seraph-e7412.appspot.com/files~2Fcontent-page~2Fimages~2Fthe-first-lan~2F',
      news: true,
      date: firestore.Timestamp.now(),
      content: [title]
    };
    return of(
      [page1, page2, page3]
    );
  }
  //
  // getArticle(id: string): Observable<Page> {
  //   return this.firestore.collection('articles').doc(id).get().pipe(
  //     shareReplay(1),
  //     map(snapshot =>
  //       ({...snapshot.data(), id: snapshot.id}) as Page)
  //   );
  // }
  //
  // private getCurrentDate(): Date {
  //   const res = new Date();
  //   console.log(`current date: ${res}`);
  //   return res;
  // }
}
