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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }

  deleteMatch(id) {
    if (!confirm(`Are you sure you want to delete this match? You won't be able to restore it.`)) return;
    this.matchService.deleteMatch(id);
  }
}
