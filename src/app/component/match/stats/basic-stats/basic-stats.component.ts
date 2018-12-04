import {Component, Input, OnInit} from '@angular/core';
import {TeamStats} from '../../team-stats.model';

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.scss']
})
export class BasicStatsComponent implements OnInit {

  @Input() stats: [TeamStats, TeamStats];

  constructor() {
  }

  ngOnInit() {
  }
}
