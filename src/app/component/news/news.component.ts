import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../core/model/news';
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