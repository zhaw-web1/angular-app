import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header/header.service';
import {NewsService} from '../news/news.service';
import {MatchService} from '../match/match.service';
import {Match} from '../match/models/match.model';
import {Observable} from 'rxjs';
import {News} from '../news';
import {EventService} from '../events/event.service';
import {SosEvent} from '../events/sos-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matches: Observable<Match[]>;
  news: Observable<News[]>;
  events: Observable<SosEvent[]>;

  constructor(
    private header: HeaderService,
    private newsService: NewsService,
    private matchService: MatchService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.header.setTitle('Scythe of Seraph');
    this.header
      .setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
        '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');

    this.matches = this.matchService.getNewestMatches(3);
    this.news = this.newsService.getNewestArticles(3);
    this.events = this.eventService.getLatestEvents(3);
  }

}
