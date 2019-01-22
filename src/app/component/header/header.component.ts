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
  image: string = null;
  hideTitle = false;
  loading = true;
  animate = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.title = this.headerService.titleEmitter;
    this.headerService.imageEmitter
      .subscribe(image => this.loadImage(image));
    this.headerService.hideTitleEmitter
      .subscribe(hide => this.hideTitle = hide);
  }

  loadedImage() {
    this.animate = true;

    const self = this;
    window.setTimeout(function() {
      self.loading = false;
    }, 200);
    window.setTimeout(function() {
      self.animate = false;
    }, 1000);
  }

  loadImage(imagePath: string) {
    this.loading = true;
    this.image = imagePath;
  }

}
