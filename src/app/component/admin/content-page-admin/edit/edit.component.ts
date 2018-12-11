import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../../../content-page/content.service';
import {Observable} from 'rxjs';
import {Page} from '../../../content-page/page.model';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  page: Page = {} as Page;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('Admin - Edit Page');
    this.header.setImage('/assets/img/banners/desktop-header.png');
    const id = this.route.snapshot.paramMap.get('page');
    this.contentService.getPage(id).subscribe(page => this.page = page);
  }

  submit() {
    this.contentService.updatePage(this.page, this.page.id);
  }

}
