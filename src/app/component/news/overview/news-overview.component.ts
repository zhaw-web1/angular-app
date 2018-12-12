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
    this.articles = this.newsService.getNewestArticles();
    this.headerService.setTitle('News');
    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Feevent11-cs-cropped.jpg?alt=media&token=e841e21f-2b27-4780-a480-4fcd98993bb4');

  }

}
