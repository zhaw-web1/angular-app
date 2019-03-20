import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Person} from '../person';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceMock {

  constructor(

  ) { }

  getStaffTeam(): Observable<Person[]> {
    return of ([]);
  }

}
