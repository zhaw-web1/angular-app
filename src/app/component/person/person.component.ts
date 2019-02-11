import {Component, Input, OnInit} from '@angular/core';
import {Person} from './';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input()
  person: Person;

  loadedImage = false;
  animate = false;

  constructor() { }

  ngOnInit() {
  }

}
