import {Component, Input, OnInit} from '@angular/core';
import {Content, ContentType} from '../content.model';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {

  @Input()
  content: Content;

  constructor() { }

  ngOnInit() {
  }

  isImage(content: Content): boolean {
    return content.type === ContentType.IMAGE;
  }

  isTitle(content: Content): boolean {
    return content.type === ContentType.TITLE;
  }

  isParagraph(content: Content): boolean {
    return content.type === ContentType.PARAGRAPH;
  }

}
