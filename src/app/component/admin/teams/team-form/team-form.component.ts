import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Team} from '../../../teams/team.model';
import {NgForm} from '@angular/forms';
import {Player} from '../../../teams/player.model';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

  @Input()
  team: Team = {
    players: []
  } as Team;

  @Input()
  provideId = false;

  @Output()
  submit: EventEmitter<Team> = new EventEmitter();

  @ViewChild('form')
  form: NgForm;

  player: Player = {} as Player;

  @Input()
  showPlayers = true;

  constructor() { }

  ngOnInit() {
  }

  addPlayer() {
    if (!this.team.players) this.team.players = [];
    this.team.players.push(this.player);
    this.player = {} as Player;
    this._submit();
  }

  _submit() {
    this.submit.emit(this.team);
  }
}
