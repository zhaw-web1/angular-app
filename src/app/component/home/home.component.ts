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
        'https://images.unsplash.com/photo-1527334919515-b8dee906a34b');
  }

}
