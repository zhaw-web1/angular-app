import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';
import {headersToString} from 'selenium-webdriver/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: Observable<string>;
  image: Observable<string>;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.title = this.headerService.titleEmitter;
    this.image = this.headerService.imageEmitter;
  }

}
