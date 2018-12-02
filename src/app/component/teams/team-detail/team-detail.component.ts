import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../header/header.service';
import {ActivatedRoute} from '@angular/router';
import {TeamsService} from '../teams.service';
import {Observable} from 'rxjs';
import {Team} from '../team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  private id: string;
  private team: Observable<Team>;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('Teams');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');
    this.id = this.route.snapshot.paramMap.get('team');
    this.team = this.teamsService.getTeam(this.id);
  }

}
