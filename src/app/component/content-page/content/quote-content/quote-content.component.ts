import {Component, Input, OnInit} from '@angular/core';
import {Quote} from '../../content.model';

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.scss']
})
export class QuoteContentComponent implements OnInit {

  @Input()
  data: Quote;

  constructor() { }

  ngOnInit() {
  }

}
