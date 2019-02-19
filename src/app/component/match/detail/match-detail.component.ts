import {Component, OnInit} from '@angular/core';
import {Match} from '../models/match.model';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../match.service';
import {HeaderService} from '../../header/header.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: Observable<Match>;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.match = this.matchService.getMatch(id);

    this.matchService.getMatch(id).subscribe(data => {
      this.headerService.setTitle('Past Matches');
    });

    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
      'game-header.jpg?alt=media&token=e49f136d-e8b0-4674-bf82-5a6b7e1defd3');
  }

}
