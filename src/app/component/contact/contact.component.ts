import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private header: HeaderService) {
  }

  ngOnInit() {
    this.header.setTitle('Contact');
    this.header
      .setImage(
        '/assets/img/banners/caspar-rubin-680338-unsplash.jpg');
  }

}
