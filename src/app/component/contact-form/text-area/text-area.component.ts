import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input()
  name: string;

  isActive = false;
  content = '';
  isFilled = false;

  constructor() { }

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
