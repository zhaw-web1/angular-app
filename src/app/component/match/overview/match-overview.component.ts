import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from '../match.model';
import {MatchService} from '../match.service';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-news-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {

  matches: Observable<Match[]>;

  constructor(
    private matchService: MatchService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    this.matches = this.matchService.getNewestMatches();
    this.headerService.setTitle('Matches');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');
  }
}
