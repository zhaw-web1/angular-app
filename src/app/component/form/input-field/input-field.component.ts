import {Component, ContentChild, HostBinding, OnInit} from '@angular/core';
import {InputRefDirective} from '../input-ref.directive';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @ContentChild(NgModel)
  ngModel: NgModel;

  constructor() {}

  ngOnInit() {
  }

  @HostBinding('class.isActive')
  get isActive() {
    return this.input ? this.input.isFocused || this.isFilled === true : false;
  }

  @HostBinding('class.isFilled')
  get isFilled() {
    return this.ngModel ? this.checkModelFilled() : false;
  }

  checkModelFilled() {
    return this.ngModel.value !== undefined && this.ngModel.value !== '';
  }
}
