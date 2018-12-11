import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../../content-page/content.service';
import {Observable} from 'rxjs';
import {Page} from '../../../content-page/page.model';
import {HeaderService} from '../../../header/header.service';

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
    this.header.setImage('/assets/img/banners/desktop-header.png');
  }

  delete(page: Page) {
    if (!confirm('Are you sure you want to delete this player?')) return;
    this.contentService.deletePage(page.id);
  }

  newPage(id: string) {
    this.contentService.createPage({title: ''} as Page, id);
  }
}
