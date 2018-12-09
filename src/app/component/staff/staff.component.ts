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
    this.header.setImage('/assets/img/banners/desktop-header.png');
  }

}
