import {Component, OnInit} from '@angular/core';
import {Match} from '../models/match.model';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../match.service';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.matchService.getMatch(id).subscribe(data => {
      this.match = data;
      this.headerService.setTitle(this.match.game.name);
    });

    this.headerService.setImage('/assets/img/banners/desktop-header.png');
  }

}
