import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Person} from '../../../person';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  @Input()
  person: Person = {
    id: '',
    name: '',
    nickname: '',
    avatarUrl: '',
    role: '',
    social: {
      email: '',
      twitter: ''
    }
  } as Person;

  @Input()
  provideId = false;

  @Output()
  submit: EventEmitter<Person> = new EventEmitter();

  @ViewChild('form')
  form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  _submit() {
    this.submit.emit(this.person);
  }
}
