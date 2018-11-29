import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.setTitle('Scythe of Seraph');
    this.header
      .setImage(
        '/assets/img/banners/caspar-rubin-680338-unsplash.jpg');
  }

}
