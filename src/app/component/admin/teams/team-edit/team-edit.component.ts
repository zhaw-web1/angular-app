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
    private header: HeaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.header.setTitle('Edit Team');
    this.id = this.route.snapshot.paramMap.get('team');
    this.teamsService.getTeam(this.id)
      .subscribe(team => {
        this.team = team;
        this.loading = false;
      });
  }

  submit() {
    // TODO: @zischler potentially add loading bar while request is in process
    this.loading = true;
    this.teamsService.updateTeam(this.id, this.team).then(success => {
      this.loading = false;
      this.router.navigate(['..']);
    });
  }

}
