import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-back-arrow',
  templateUrl: './page-back-arrow.component.html',
  styleUrls: ['./page-back-arrow.component.scss']
})
export class PageBackArrowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

}
