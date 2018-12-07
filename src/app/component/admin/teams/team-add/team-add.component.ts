import { Component, OnInit } from '@angular/core';
import {Team} from '../../../teams/team.model';
import {TeamsService} from '../../../teams/teams.service';
import {Router} from '@angular/router';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent implements OnInit {
  team: Team = {} as Team;
  loading: boolean;

  constructor(
    private header: HeaderService,
    private teamsService: TeamsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.header.setTitle('Add Team');
  }

  submit() {
    if (this.loading) return;

    this.loading = true;
    this.teamsService.createTeam(this.team, this.team.id).then(success => {
      this.loading = false;
      this.router.navigate([this.team.id]);
    });
  }

}
