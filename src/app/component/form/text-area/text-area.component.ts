import {Component, ContentChild, HostBinding, Input, OnInit} from '@angular/core';
import {InputRefDirective} from '../input-ref.directive';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  // TODO @Carlo get correct reference. input is not found.
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() { }

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
