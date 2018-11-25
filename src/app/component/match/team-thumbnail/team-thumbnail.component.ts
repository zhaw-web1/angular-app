import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../team.model';
import {Match} from '../match.model';

@Component({
  selector: 'app-team-thumbnail',
  templateUrl: './team-thumbnail.component.html',
  styleUrls: ['./team-thumbnail.component.scss']
})
export class TeamThumbnailComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }
}
