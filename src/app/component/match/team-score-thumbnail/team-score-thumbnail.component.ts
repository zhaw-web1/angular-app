import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../team.model';
import {Match} from '../match.model';

@Component({
  selector: 'app-team-score-thumbnail',
  templateUrl: './team-score-thumbnail.component.html',
  styleUrls: ['./team-score-thumbnail.component.scss']
})
export class TeamScoreThumbnailComponent implements OnInit {
  @Input() team: Team;
  @Input() score: number;

  constructor() { }

  ngOnInit() {
  }
}
