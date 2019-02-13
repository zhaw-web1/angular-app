import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';
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

  animateImage() {
    this.animate = true;

    const self = this;
    window.setTimeout(function() {
      self.animate = false;
    }, 1000);
  }

  loadImage(imagePath: string) {
    if (!Image) return;
    const loadingImage = new Image();
    const self = this;
    loadingImage.onload = function() {
        self.changeImage(loadingImage);
    };
    loadingImage.src = imagePath;
  }

  changeImage(loadedImage) {
    this.loading = false;
    this.animateImage();

    const self = this;
    window.setTimeout(function() {
      self.image = loadedImage.src;
    }, 200);
  }

}
