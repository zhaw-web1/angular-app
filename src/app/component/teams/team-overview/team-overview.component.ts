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
    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Feevent-10-lol-cropped.jpg?alt=media&token=7442104c-b862-4a5a-85ff-8e7ea306cf7f');

    this.teams = this.teamsService.getTeams();
  }

}
