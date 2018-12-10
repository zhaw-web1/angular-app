import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../content-page/page.model';
import {ContentService} from '../content-page/content.service';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-data-policy',
  templateUrl: './data-policy.component.html',
  styleUrls: ['./data-policy.component.scss']
})
export class DataPolicyComponent implements OnInit {
  page: Observable<Page>;

  constructor(
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('Data Policy');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Ftekken-cropped.jpg?alt=media&token=bcec24ea-c70a-4fcd-acc3-b7840055376a');
    this.page = this.contentService.getPage('data-policy');
  }
}
