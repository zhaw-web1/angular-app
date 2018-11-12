import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../content.model';

@Component({
  selector: 'app-news-title',
  templateUrl: './news-title.component.html',
  styleUrls: ['./news-title.component.scss']
})
export class NewsTitleComponent implements OnInit {

  @Input()
  data: Title;

  constructor() { }

  ngOnInit() {
  }

}
