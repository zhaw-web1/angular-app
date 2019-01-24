import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  content: Content;

  constructor() { }

  ngOnInit() {
  }

  isImage(content: Content): boolean {
    return content.type === 'image';
  }

  isTitle(content: Content): boolean {
    return content.type === 'title';
  }

  isParagraph(content: Content): boolean {
    return content.type === 'paragraph';
  }

  isQuote(content: Content): boolean {
    return content.type === 'quote';
  }
}
