import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../news.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  articles: Observable<News[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.articles = this.newsService.getNewestArticles(5);
  }

}
