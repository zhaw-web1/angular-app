import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../../match/match.service';
import {Match} from '../../../match/match.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-match-admin-overview',
  templateUrl: './match-admin-overview.component.html',
  styleUrls: ['./match-admin-overview.component.scss']
})
export class MatchAdminOverviewComponent implements OnInit {

  matches: Observable<Match[]>;

  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.matches = this.matchService.getMatches();
  }

}
