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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
    const id = this.route.snapshot.paramMap.get('page');
    this.contentService.getPage(id).subscribe(page => this.page = page);
  }

  submit() {
    this.contentService.updatePage(this.page, this.page.id);
  }

}
