import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-back-arrow',
  templateUrl: './page-back-arrow.component.html',
  styleUrls: ['./page-back-arrow.component.scss']
})
export class PageBackArrowComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
