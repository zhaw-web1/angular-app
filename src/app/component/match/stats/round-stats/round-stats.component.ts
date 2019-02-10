import {Component, Input, OnInit} from '@angular/core';
import {Round} from '../../models/round.model';
import {Team} from '../../models/team.model';

@Component({
  selector: 'app-round-stats',
  templateUrl: './round-stats.component.html',
  styleUrls: ['./round-stats.component.scss']
})
export class RoundStatsComponent implements OnInit {
  @Input() round: Round;
  @Input() teams: { team1: Team, team2: Team };
  @Input() isTournament?: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
