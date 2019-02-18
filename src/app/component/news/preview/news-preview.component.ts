import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Page} from '../../content-page/page.model';
import {isPlatformBrowser} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';

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

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private storage: AngularFireStorage
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

  async getImage(news: Page): Promise<string> {
    if (!news || !news.image) return null;
    if (news.usesNewImage) {
      return (await this.storage.ref(`content-page/images/${news.id}/thumbnail`).getDownloadURL()) as unknown as string;
    } else return news.image;
  }
}
