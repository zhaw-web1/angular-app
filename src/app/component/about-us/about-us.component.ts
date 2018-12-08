import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content-page/content.service';
import {Observable} from 'rxjs';
import {Page} from '../content-page/page.model';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  page: Observable<Page>;

  constructor(
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('About us');
    this.header.setImage('/assets/img/banners/desktop-header.png');
    this.page = this.contentService.getPage('about-us');
  }

}
