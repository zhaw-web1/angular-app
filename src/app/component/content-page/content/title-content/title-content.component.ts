import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../../content.model';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss']
})
export class TitleContentComponent implements OnInit {

  @Input()
  data: Title;

  constructor() { }

  ngOnInit() {
  }

}
