import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../teams/teams.service';
import {Team} from '../../teams/team.model';
import {Observable} from 'rxjs';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(
    private header: HeaderService,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.header.setTitle('Teams - Admin');
    this.teams = this.teamsService.getTeams();
  }

  delete(id: string) {
    if (!confirm(`Are you sure you want to delete this match? You won't be able to restore it.`)) return;
    this.teamsService.deleteTeam(id);
  }
}
