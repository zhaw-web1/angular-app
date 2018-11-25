import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../match.model';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  @Input() match: Match;

  constructor() { }

  ngOnInit() {
  }

}
