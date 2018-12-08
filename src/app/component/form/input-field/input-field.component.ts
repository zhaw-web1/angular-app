import {Component, ContentChild, HostBinding, OnInit} from '@angular/core';
import {InputRefDirective} from '../input-ref.directive';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() {}

  ngOnInit() {
  }


  @HostBinding('class.isActive')
  get isActive() {
    return this.input ? this.input.isActive : false;
  }

  @HostBinding('class.isFilled')
  get isFilled() {
    return this.input ? this.input.isFilled : false;
  }
}
