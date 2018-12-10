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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Feevent-10-cropped.jpg?alt=media&token=5f54ce33-3ad4-4a50-b04b-ee939a1e5488');
    this.page = this.contentService.getPage('about-us');
  }

}
