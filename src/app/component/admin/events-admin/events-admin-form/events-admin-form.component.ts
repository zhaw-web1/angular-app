import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {firestore} from 'firebase';
import {SosEvent} from '../../../events/sos-event.model';

@Component({
  selector: 'app-events-admin-form',
  templateUrl: './events-admin-form.component.html',
  styleUrls: ['./events-admin-form.component.scss']
})
export class EventsAdminFormComponent implements OnInit {

  @Input()
  event: SosEvent = {
    id: '',
    date: firestore.Timestamp.now(),
    time: firestore.Timestamp.now(),
    title: '',
  } as SosEvent;

  @Output()
  submit: EventEmitter<SosEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _submit() {
    this.submit.emit(this.event);
  }

  getTimestamp(date: string) {
    return firestore.Timestamp.fromDate(new Date(date));
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
