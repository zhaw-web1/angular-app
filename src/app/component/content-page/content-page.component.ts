import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {ContentService} from './content.service';
import {Page} from './page.model';
import {HeaderService} from '../header/header.service';
import {Meta} from '@angular/platform-browser';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit, OnChanges {

  @Input()
  page: Page;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private header: HeaderService,
    private meta: Meta,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(m => m.get('contentPage')),
      filter(page => !!page)
    ).subscribe(page => {
      this.contentService.getPage(page)
        .subscribe(p => {
          this.page = p;
          this.updateHeader(p);
        });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPage: Page = changes.page.currentValue;
    const previousPage: Page = changes.page.previousValue;
    if (previousPage !== currentPage) {
      this.updateHeader(currentPage);

    }
  }


  private updateHeader(page: Page) {
    if (page.usesNewImage) {
      this.storage
        .ref(`content-page/images/${page.id}/image@1920`).getDownloadURL().subscribe(r => this.header.setImage(r));
    } else this.header.setImage(page.image);
    if (this.page.news) {
      this.header.setTitle('News - ' + page.title, true);
    } else {
      this.header.setTitle(page.title);
    }
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    let month = '' + (date.getMonth() + 1);
    const day = '' + date.getDate();
    const year = date.getFullYear();

    switch (month) {
      case '1': month = 'January';
        break;
      case '2': month = 'February';
        break;
      case '3': month = 'March';
        break;
      case '4': month = 'April';
        break;
      case '5': month = 'May';
        break;
      case '6': month = 'June';
        break;
      case '7': month = 'July';
        break;
      case '8': month = 'August';
        break;
      case '9': month = 'September';
        break;
      case '10': month = 'October';
        break;
      case '11': month = 'November';
        break;
      case '12': month = 'December';
        break;
    }

    return [day, month, year].join(' ');
  }
}
