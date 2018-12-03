import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../news.model';
import {Observable} from 'rxjs';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.scss']
})
export class NewsOverviewComponent implements OnInit {

  articles: Observable<News[]>;

  constructor(
    private newsService: NewsService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.articles = this.newsService.getNewestArticles(5);
    this.headerService.setTitle('News');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');

  }

}
