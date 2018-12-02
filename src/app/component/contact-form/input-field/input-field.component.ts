import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  required: boolean;

  @Input()
  autocomplete: string;

  content = '';

  isActive = false;
  isFilled = false;
  inputType = 'text';

  constructor() {}

  ngOnInit() {
    if (this.autocomplete === 'email' || this.autocomplete === 'tel') {
      this.inputType = this.autocomplete;
    }
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
