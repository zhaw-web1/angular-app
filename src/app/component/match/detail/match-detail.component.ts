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

    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Ftekken-cropped.jpg?alt=media&token=bcec24ea-c70a-4fcd-acc3-b7840055376a');
  }

}
