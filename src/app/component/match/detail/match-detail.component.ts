import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../match.model';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(private route: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.matchService.getMatch(id).subscribe(data => this.match = data);
  }

}
