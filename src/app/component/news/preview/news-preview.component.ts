import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Page} from '../../content-page/page.model';
import {isPlatformBrowser} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, observeOn, shareReplay} from 'rxjs/operators';
import {observe} from 'rxjs-observe';

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
    observe(this.news).observables.usesNewImage
      .pipe(
        distinctUntilChanged(),
        shareReplay(1)
      ).subscribe(usesNewImage => {
      if (usesNewImage) {
        this.news.image = null;
        this.storage
          .ref(`content-page/images/${this.news.id}/image@600`).getDownloadURL().subscribe(r => this.news.image = r);
      }
    });
  }

}
