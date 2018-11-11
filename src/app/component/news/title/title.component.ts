import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../content.model';

@Component({
  selector: 'app-news-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  data: Title;

  constructor() { }

  ngOnInit() {
  }

}
