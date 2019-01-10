import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-back-arrow',
  templateUrl: './match-back-arrow.component.html',
  styleUrls: ['./match-back-arrow.component.scss']
})
export class MatchBackArrowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

}
