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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2FSoS-EEvent11-cropped.jpg?alt=media&token=90572e56-64b0-493e-8ce4-5cbb9eef33ff');
    this.page = this.contentService.getPage('imprint');
  }

}
