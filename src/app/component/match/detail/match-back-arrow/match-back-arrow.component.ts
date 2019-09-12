import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-match-back-arrow',
  templateUrl: './match-back-arrow.component.html',
  styleUrls: ['./match-back-arrow.component.scss']
})
export class MatchBackArrowComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
