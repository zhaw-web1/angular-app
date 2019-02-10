import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../team.model';

@Component({
  selector: 'app-team-preview',
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.scss']
})
export class TeamPreviewComponent implements OnInit {
  @Input() team: Team;
  @Input() index: number;

  animate = false;
  loadedImage = false;

  constructor() { }

  ngOnInit() {
  }

}
