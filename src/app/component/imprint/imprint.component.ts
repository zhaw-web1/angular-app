import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../content-page/page.model';
import {ContentService} from '../content-page/content.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  page: Observable<Page>;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.page = this.contentService.getPage('imprint');
  }

}
