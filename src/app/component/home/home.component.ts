import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HeaderService} from '../header/header.service';
import {NewsService} from '../news/news.service';
import {MatchService} from '../match/match.service';
import {Match} from '../match/models/match.model';
import {Observable} from 'rxjs';
import {EventService} from '../events/event.service';
import {SosEvent} from '../events/sos-event.model';
import {Page} from '../content-page/page.model';
import {MediaObserver} from '@angular/flex-layout';
import {isPlatformBrowser} from '@angular/common';

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
    private mediaObserver: MediaObserver,
    @Inject(PLATFORM_ID)
    private platformId: string
  ) { }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.header.setTitle('Scythe of Seraph');
    this.header
      .setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');

    const loadFour = this.mediaObserver.isActive('sos.tablet');

    this.matches = this.matchService.getNewestMatches(loadFour ? 4 : 3);
    this.news = this.newsService.getNewestArticles(loadFour ? 4 : 3);
    this.events = this.eventService.getLatestEvents(3);
  }

}
