import {Component, ContentChild, HostBinding, Input, OnInit} from '@angular/core';
import {InputRefDirective} from '../input-ref.directive';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  @ContentChild(NgModel)
  ngModel: NgModel;

  constructor() { }

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
    console.log(this.ngModel.value);
    return this.ngModel.value !== undefined && this.ngModel.value !== '';
  }

}
