import {Component, Input, OnInit} from '@angular/core';
import {News} from './news.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input()
  news: Observable<News>;

  constructor() { }

  ngOnInit() {
  }

}
