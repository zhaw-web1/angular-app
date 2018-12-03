import {Component, Input, OnInit} from '@angular/core';
import {TeamStats} from '../team-stats.model';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {
  @Input() stats: TeamStats;

  constructor() { }

  ngOnInit() {
  }
}
