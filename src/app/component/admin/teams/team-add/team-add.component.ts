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
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }

  submit() {
    if (this.loading) return;

    this.loading = true;
    this.teamsService.createTeam(this.team, this.team.id).then(success => {
      this.loading = false;
      this.router.navigate(['/', 'admin', 'teams', this.team.id]);
    });
  }

}
