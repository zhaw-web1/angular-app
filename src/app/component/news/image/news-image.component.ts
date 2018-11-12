import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../content.model';

@Component({
  selector: 'app-news-image',
  templateUrl: './news-image.component.html',
  styleUrls: ['./news-image.component.scss']
})
export class NewsImageComponent implements OnInit {

  @Input()
  data: Image;

  constructor() { }

  ngOnInit() {
  }

}
