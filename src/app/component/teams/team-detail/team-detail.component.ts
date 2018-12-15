import {Component, OnInit} from '@angular/core';
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
  team: Observable<Team>;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('Teams');
    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Feevent-10-lol-cropped.jpg?alt=media&token=7442104c-b862-4a5a-85ff-8e7ea306cf7f');
    this.id = this.route.snapshot.paramMap.get('team');
    this.team = this.teamsService.getTeam(this.id);
  }

}
