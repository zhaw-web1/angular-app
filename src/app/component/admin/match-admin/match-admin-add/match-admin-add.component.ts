import { Component, OnInit } from '@angular/core';
import {Match} from '../../../match/models/match.model';
import {Game} from '../../../match/models/game.model';
import {MatchWinner} from '../../../match/models/match-winner.enum';
import {HeaderService} from '../../../header/header.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../match/match.service';

@Component({
  selector: 'app-match-admin-add',
  templateUrl: './match-admin-add.component.html',
  styleUrls: ['./match-admin-add.component.scss']
})
export class MatchAdminAddComponent implements OnInit {

  match: Match = {
    game: {} as Game,
    teams: {
      team1: {},
      team2: {}
    },
    rounds: [],
    finalScores: {},
    winner: MatchWinner.Tie,
    date: null
  } as Match;

  loading: boolean;

  constructor(
    private header: HeaderService,
    private router: Router,
    private route: ActivatedRoute,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.header.setTitle('Add Match');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');
  }

  submit() {
    if (this.loading) return;

    this.loading = true;
    this.matchService.createMatch(this.match, this.match.id).then(success => {
      this.loading = false;
      this.router.navigate([this.match.id]);
    });
  }
}
