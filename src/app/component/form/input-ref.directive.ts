import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'input[appInput]',
})
export class InputRefDirective {
  isActive = false;
  isFilled = false;
  // TODO: @Carlo need to get content from form
  content = '';

  constructor() { }

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
