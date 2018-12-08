import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../content.model';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent implements OnInit {

  @Input()
  data: Image;

  constructor() { }

  ngOnInit() {
  }

}
