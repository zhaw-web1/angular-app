import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../../content-page/page.model';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent implements OnInit {

  @Input()
  news: Page = {
    content: {}
  } as Page;

  loadedImage = false;
  animate = false;

  constructor() { }

  ngOnInit() {
  }

}
