import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  content = '';

  isActive = false;
  isFilled = false;

  constructor() {}

  ngOnInit() {
  }

  toggleActive() {
    if (this.content === '') {
      this.isActive = !this.isActive;
      this.isFilled = false;
    } else {
      this.isFilled = true;
    }
  }

}
