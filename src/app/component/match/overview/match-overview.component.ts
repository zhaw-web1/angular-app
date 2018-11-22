import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from '../match.model';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {

  matches: Observable<Match[]>;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = this.matchService.getNewestMatches();
  }
}
