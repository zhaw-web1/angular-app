import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../../content-page/content.service';
import {Observable} from 'rxjs';
import {Page} from '../../../content-page/page.model';
import {HeaderService} from '../../../header/header.service';
import {firestore} from 'firebase';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  pages: Observable<Page[]>;
  newPageId = '';

  constructor(
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.pages = this.contentService.getPages();
    this.header.setTitle('Admin - Page Overview');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');
  }

  delete(page: Page) {
    if (!confirm(`Are you sure you want to delete this page? You won't be able to restore it.`)) return;
    this.contentService.deletePage(page.id);
  }

  newPage(id: string) {
    const timestamp = firestore.Timestamp.fromDate(new Date());
    this.contentService.createPage({title: '', date: timestamp, content: []} as Page, id);
  }
}
