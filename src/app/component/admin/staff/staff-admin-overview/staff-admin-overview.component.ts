import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HeaderService} from '../../../header/header.service';
import {StaffService} from '../../../staff/staff.service';
import {Person} from '../../../person';

@Component({
  selector: 'app-staff',
  templateUrl: './staff-admin-overview.component.html',
  styleUrls: ['./staff-admin-overview.component.scss']
})
export class StaffAdminOverviewComponent implements OnInit {
  staffPersons: Observable<Person[]>;

  constructor(
    private header: HeaderService,
    private staffService: StaffService
  ) { }

  ngOnInit() {
    this.header.setTitle('Staff - Admin');
    this.staffPersons = this.staffService.getStaffTeam();
  }

  delete(id: string) {
    if (!confirm(`Are you sure you want to delete this Staff? You won't be able to restore it.`)) return;
    this.staffService.deleteStaff(id);
  }
}
