import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../header/header.service';
import {NewsService} from '../news.service';
import {ActivatedRoute} from '@angular/router';
import {News} from '../news.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article: Observable<News>;

  constructor(
    private headerService: HeaderService,
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerService.setTitle('News');
    const id = this.activatedRoute.snapshot.paramMap.get('page');
    this.article = this.newsService.getArticle(id);
    this.article.subscribe(article => {
      if (article.image) {
        this.headerService.setImage(article.image);
      }
    });

  }

}
