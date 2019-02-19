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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
      'staff-header.jpg?alt=media&token=b90c9dcd-0654-41ea-83c8-c5e307debe4f');
  }

}
