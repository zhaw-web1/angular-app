import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../models/match.model';

@Component({
  selector: 'app-match-preview',
  templateUrl: './match-preview.component.html',
  styleUrls: ['./match-preview.component.scss']
})
export class MatchPreviewComponent implements OnInit {

  @Input()
  match: Match;

  @Input()
  isDetail: boolean;

  loaded = false;

  constructor() {
  }

  ngOnInit() {

  }

  loadedImages(loaded: boolean) {
    this.loaded = loaded;
  }
}
