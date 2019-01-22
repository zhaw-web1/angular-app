import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../models/match.model';
import {MatchWinner} from '../../models/match-winner.enum';

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.scss']
})
export class BasicStatsComponent implements OnInit {
  @Input()
  match: Match;

  @Input()
  isDetail: boolean;

  @Output()
  loadedImages = new EventEmitter<boolean>();

  loadedImage1 = false;
  loadedImage2 = false;

  MatchWinner;

  constructor() {
  }

  ngOnInit() {
    this.MatchWinner = MatchWinner;
  }

  loadedImage(imageNumber: number) {
    if (imageNumber === 1) {
      this.loadedImage1 = true;
    } else {
      this.loadedImage2 = true;
    }

    if (this.loadedImage1 && this.loadedImage2) {
      this.loadedImages.emit(true);
    }
  }
}
