import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from '../models/match.model';
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
    this.matches = this.matchService.getMatches();
    this.headerService.setTitle('Past Matches');
    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Ftekken-cropped.jpg?alt=media&token=bcec24ea-c70a-4fcd-acc3-b7840055376a');
  }
}
