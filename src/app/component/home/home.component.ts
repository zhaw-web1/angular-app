import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header/header.service';
import {NewsService} from '../news/news.service';
import {MatchService} from '../match/match.service';
import {Match} from '../match/match.model';
import {Observable} from 'rxjs';
import {News} from '../news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private matches: Observable<Match[]>;
  private news: Observable<News[]>;

  constructor(
    private header: HeaderService,
    private newsService: NewsService,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.header.setTitle('Scythe of Seraph');
    this.header
      .setImage(
        '/assets/img/banners/caspar-rubin-680338-unsplash.jpg');

    this.matches = this.matchService.getNewestMatches(3);
    this.news = this.newsService.getNewestArticles(3);
  }

}
