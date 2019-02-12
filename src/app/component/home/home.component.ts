import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header/header.service';
import {NewsService} from '../news/news.service';
import {MatchService} from '../match/match.service';
import {Match} from '../match/models/match.model';
import {Observable} from 'rxjs';
import {EventService} from '../events/event.service';
import {SosEvent} from '../events/sos-event.model';
import {Page} from '../content-page/page.model';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matches: Observable<Match[]>;
  news: Observable<Page[]>;
  events: Observable<SosEvent[]>;

  constructor(
    private header: HeaderService,
    private newsService: NewsService,
    private matchService: MatchService,
    private eventService: EventService,
    private mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.header.setTitle('Scythe of Seraph');
    this.header
      .setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
        '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');

    const loadFour = this.mediaObserver.isActive('sos.tablet');

    console.log(`tablet: ${loadFour}`);

    this.matches = this.matchService.getNewestMatches(loadFour ? 4 : 3);
    this.news = this.newsService.getNewestArticles(loadFour ? 4 : 3);
    this.events = this.eventService.getLatestEvents(3);
  }

}
