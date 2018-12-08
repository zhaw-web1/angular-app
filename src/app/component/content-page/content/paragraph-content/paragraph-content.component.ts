import {Component, Input, OnInit} from '@angular/core';
import {Paragraph} from '../../content.model';

@Component({
  selector: 'app-paragraph-content',
  templateUrl: './paragraph-content.component.html',
  styleUrls: ['./paragraph-content.component.scss']
})
export class ParagraphContentComponent implements OnInit {

  @Input()
  data: Paragraph;

  constructor() { }

  ngOnInit() {
  }

}
