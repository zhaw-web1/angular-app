import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../content-page/page.model';
import {ContentService} from '../content-page/content.service';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  page: Observable<Page>;

  constructor(
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('Imprint');
    this.header.setImage('/assets/img/banners/desktop-header.png');
    this.page = this.contentService.getPage('imprint');
  }

}
