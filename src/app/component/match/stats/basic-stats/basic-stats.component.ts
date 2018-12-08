import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../models/match.model';
import {MatchWinner} from '../../models/match-winner.enum';

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.scss']
})
export class BasicStatsComponent implements OnInit {
  @Input()
  match: Match;

  @Input()
  isDetail: boolean;

  MatchWinner;

  constructor() {
  }

  ngOnInit() {
    this.MatchWinner = MatchWinner;
  }
}
