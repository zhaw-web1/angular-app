import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../header/header.service';
import {TeamsService} from '../teams.service';
import {Observable} from 'rxjs';
import {Team} from '../team.model';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(
    private headerService: HeaderService,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('Teams');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');

    this.teams = this.teamsService.getTeams();
  }

}
