import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../../match/match.service';
import {Match} from '../../../match/models/match.model';
import {Observable} from 'rxjs';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-match-admin-overview',
  templateUrl: './match-admin-overview.component.html',
  styleUrls: ['./match-admin-overview.component.scss']
})
export class MatchAdminOverviewComponent implements OnInit {

  matches: Observable<Match[]>;

  constructor(
    private matchService: MatchService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.matches = this.matchService.getMatches();
    this.header.setTitle('Admin - Matches');
    this.header.setImage('/assets/img/banners/desktop-header.png');
  }

}
