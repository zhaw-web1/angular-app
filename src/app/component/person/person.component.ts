import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Person} from './';
import {isPlatformBrowser} from '@angular/common';

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
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

}
