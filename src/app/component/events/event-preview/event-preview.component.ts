import {Component, Input, OnInit} from '@angular/core';
import {SosEvent} from '../sos-event.model';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent implements OnInit {

  @Input()
  event: SosEvent = null;

  constructor(
  ) { }

  ngOnInit() {
  }

}
