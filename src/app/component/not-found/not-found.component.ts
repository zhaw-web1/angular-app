import {Component, Inject, OnInit, Optional} from '@angular/core';
import {HeaderService} from '../header/header.service';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( private headerService: HeaderService, @Optional() @Inject(RESPONSE) private response: any) { }
  ngOnInit() {
    this.response.statusCode = 404;
    this.response.statusMessage = '404 - Page Not Found';
    this.headerService.setTitle('404');
    this.headerService.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }
}
