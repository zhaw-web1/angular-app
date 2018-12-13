import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../content-page/page.model';
import {ContentService} from '../content-page/content.service';

@Component({
  selector: 'app-data-policy',
  templateUrl: './data-policy.component.html',
  styleUrls: ['./data-policy.component.scss']
})
export class DataPolicyComponent implements OnInit {
  page: Observable<Page>;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.page = this.contentService.getPage('data-policy');
  }
}
