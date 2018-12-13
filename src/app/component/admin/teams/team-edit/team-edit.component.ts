import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../../../teams/teams.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../../../teams/team.model';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  private id: string;
  team: Team = {
    players: []
  } as Team;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.header.setTitle('Edit Team');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');
    this.id = this.route.snapshot.paramMap.get('team');
    this.teamsService.getTeam(this.id)
      .subscribe(team => {
        this.team = team;
        this.loading = false;
      });
  }

  submit() {
    this.loading = true;
    this.teamsService.updateTeam(this.id, this.team).then(success => {
      this.loading = false;
    });
  }

}
