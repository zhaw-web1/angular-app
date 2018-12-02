import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../player.model';

@Component({
  selector: 'app-team-person',
  templateUrl: './team-person.component.html',
  styleUrls: ['./team-person.component.scss']
})
export class TeamPersonComponent implements OnInit {

  @Input()
  player: Player;

  constructor() { }

  ngOnInit() {
  }

}
