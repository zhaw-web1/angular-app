import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../../match/models/match.model';
import {Game} from '../../../match/models/game.model';
import {MatchWinner} from '../../../match/models/match-winner.enum';
import {Round} from '../../../match/models/round.model';
import {firestore} from 'firebase';

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
    date: null,
    isTournament: false,
    tournamentName: '',
    tournamentLogo: ''
  } as Match;

  @Input()
  showRounds = true;

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
    this.round = {
      scores: {}
    } as Round;
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

  getTimestamp(date: string) {
    return firestore.Timestamp.fromDate(new Date(date));
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
