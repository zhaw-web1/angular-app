import {Component, Input, OnInit} from '@angular/core';
import {Paragraph} from '../content.model';

@Component({
  selector: 'app-news-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input()
  data: Paragraph;

  constructor() { }

  ngOnInit() {
  }

}
