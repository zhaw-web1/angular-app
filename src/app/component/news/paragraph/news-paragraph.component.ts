import {Component, Input, OnInit} from '@angular/core';
import {Paragraph} from '../content.model';

@Component({
  selector: 'app-news-paragraph',
  templateUrl: './news-paragraph.component.html',
  styleUrls: ['./news-paragraph.component.scss']
})
export class NewsParagraphComponent implements OnInit {

  @Input()
  data: Paragraph;

  constructor() { }

  ngOnInit() {
  }

}
