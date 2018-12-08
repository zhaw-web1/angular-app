import {Directive, HostListener, Input} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[appInput]',
})
export class InputRefDirective {
  isActive = false;
  isFilled = false;
  content = '';

  constructor() { }

  @Input()
  model: NgModel;

  @HostListener('focus')
  onFocus() {
    this.toggleActive();
  }

  @HostListener('blur')
  onBlur() {
    this.toggleActive();
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
