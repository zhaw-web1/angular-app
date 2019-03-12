import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from '../../../header/header.service';
import {Person} from '../../../person';
import {StaffService} from '../../../staff/staff.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss']
})
export class StaffAddComponent implements OnInit {
  person: Person = {
    id: '',
    name: '',
    nickname: '',
    avatarUrl: '',
    role: '',
    social: {
      email: null,
      twitter: null
    }
  } as Person;
  loading: boolean;

  constructor(
    private header: HeaderService,
    private staffService: StaffService,
    private router: Router
  ) { }

  ngOnInit() {
    this.header.setTitle('Add Staff');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }

  submit() {
    if (this.loading) return;

    this.loading = true;
    this.staffService.createStaff(this.person).then(success => {
      this.loading = false;
      this.router.navigate(['/', 'admin', 'staff', success.id]);
    });
  }

}
