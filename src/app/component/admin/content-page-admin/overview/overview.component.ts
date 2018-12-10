import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../../content-page/content.service';
import {Observable} from 'rxjs';
import {Page} from '../../../content-page/page.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  pages: Observable<Page[]>;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.pages = this.contentService.getPages();
  }

}
