import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../../match/models/match.model';
import {Game} from '../../../match/models/game.model';
import {MatchWinner} from '../../../match/models/match-winner.enum';
import {Round} from '../../../match/models/round.model';

@Component({
  selector: 'app-match-admin-form',
  templateUrl: './match-admin-form.component.html',
  styleUrls: ['./match-admin-form.component.scss']
})
export class MatchAdminFormComponent implements OnInit {

  @Input()
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

  @Input()
  showRounds = true;

  @Input()
  provideId = false;

  @Output()
  submit: EventEmitter<Match> = new EventEmitter();

  round = {
    scores: {}
  } as Round;

  constructor() { }

  ngOnInit() {
  }

  addRound(round: Round) {
    this.match.rounds.push(round);
    this.round = {} as Round;
    this._submit();
  }

  removeRound(round: Round) {
    if (!confirm('Are you sure you want to delete this round?')) return;
    const rounds = this.match.rounds;
    if (rounds.indexOf(round) > -1) {
      const index = rounds.indexOf(round);
      rounds.splice(index, 1);
    }
    this._submit();
  }

  _submit() {
    this.submit.emit(this.match);
  }

}
