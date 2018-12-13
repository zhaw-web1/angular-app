import { Component, OnInit } from '@angular/core';
import {StaffService} from './staff.service';
import {Person} from '../person';
import {Observable} from 'rxjs';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staff: Observable<Person[]>;

  constructor(
    private staffService: StaffService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.staff = this.staffService.getStaffTeam();
    this.header.setTitle('Staff');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
        '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');
  }

}
