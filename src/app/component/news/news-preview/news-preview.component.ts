import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news.model';
import {Content, ContentType} from '../content.model';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent implements OnInit {

  @Input()
  news: News = {
    content: {}
  } as News;

  constructor() { }

  ngOnInit() {
  }

}
