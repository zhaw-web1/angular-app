import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../content.model';

@Component({
  selector: 'app-news-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input()
  data: Image;

  constructor() { }

  ngOnInit() {
  }

}
