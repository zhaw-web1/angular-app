import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Team} from '../../../teams/team.model';
import {NgForm} from '@angular/forms';
import {Person} from '../../../person';

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

  player: Person = {} as Person;

  @Input()
  showPlayers = true;

  constructor() { }

  ngOnInit() {
  }

  addPlayer() {
    if (!this.team.players) this.team.players = [];
    this.team.players.push(this.player);
    this.player = {} as Person;
    this._submit();
  }

  removePlayer(player: Person) {
    if (!this.team.players) this.team.players = [];
    const players = this.team.players;
    if (players.indexOf(player) > -1) {
      const index = players.indexOf(player);
      this.team.players = players.splice(index, 1);
    }
    this._submit();
  }

  _submit() {
    this.submit.emit(this.team);
  }
}
