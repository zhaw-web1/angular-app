import {Directive, HostListener, Input} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[appInput]',
})
export class InputRefDirective {
  isFocused = false;

  constructor() { }

  @Input()
  model: NgModel;

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
  }
}
