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
import {map} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';

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
      .setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/' +
        'o/header-images%2Fhome-new.jpg?alt=media&token=b121ab59-0da8-4609-b162-2b44c86f1337');

    const loadFour = this.mediaObserver.isActive('sos.tablet');

    this.matches = this.matchService.getNewestMatches(loadFour ? 4 : 3);
    this.news = this.newsService.getNewestArticles(loadFour ? 4 : 3)
      .pipe(
        map(articles => articles.map(article => {
          return article;
        }))
      );
    this.events = this.eventService.getLatestEvents(3);
  }

}
