import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, shareReplay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Page} from './page.model';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceMock {

  constructor() { }

  getPage(id: string): Observable<any> {
    return of ({});
  }

  getPages(): Observable<Page[]> {
   return of([]);
  }

  createPage(page: Page, id?: string): Promise<any> {
  return null;
  }

  updatePage(page: Page, id: string): Promise<void> {
    return null;
  }

  deletePage(id: string): Promise<void> {
    return null;
  }

}
