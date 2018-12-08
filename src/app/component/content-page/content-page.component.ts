import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {ContentService} from './content.service';
import {Page} from './page.model';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  @Input()
  page: Page;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(m => m.get('contentPage')),
      filter(page => !!page)
    ).subscribe(page => {
      this.contentService.getPage(page)
        .subscribe(p => {
          this.page = p;
          this.header.setTitle(p.title);
          this.header.setImage(p.image);
        });
    });
  }

}
