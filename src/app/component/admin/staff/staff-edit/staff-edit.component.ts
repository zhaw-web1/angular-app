import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderService} from '../../../header/header.service';
import {Person} from '../../../person';
import {StaffService} from '../../../staff/staff.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  private id: string;
  person: Person;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('Edit Team');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
    this.id = this.route.snapshot.paramMap.get('staff');
    this.staffService.getStaff(this.id)
      .subscribe(person => {
        this.person = person;
        this.loading = false;
      });
  }

  submit() {
    this.loading = true;
    this.staffService.updateStaff(this.id, this.person).then(success => {
      this.loading = false;
    });
  }

}
