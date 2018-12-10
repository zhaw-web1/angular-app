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
      .setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
        '/o/header-images%2Fcontact-cropped.jpg?alt=media&token=1bd787a2-de05-4884-9225-432567d585f1');
  }

}
