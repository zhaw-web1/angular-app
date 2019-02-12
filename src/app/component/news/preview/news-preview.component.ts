import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Page} from '../../content-page/page.model';
import {isPlatformBrowser} from '@angular/common';

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
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

}
