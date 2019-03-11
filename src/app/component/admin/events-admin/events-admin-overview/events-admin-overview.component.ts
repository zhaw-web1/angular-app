import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HeaderService} from '../../../header/header.service';
import {SosEvent} from '../../../events/sos-event.model';
import {EventService} from '../../../events/event.service';

@Component({
  selector: 'app-event-admin-overview',
  templateUrl: './events-admin-overview.component.html',
  styleUrls: ['./events-admin-overview.component.scss']
})
export class EventsAdminOverviewComponent implements OnInit {

  events: Observable<SosEvent[]>;

  constructor(
    private eventService: EventService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.header.setTitle('Admin - Events');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }

  deleteEvent(id) {
    if (!confirm(`Are you sure you want to delete this event? You won't be able to restore it.`)) return;
    this.eventService.deleteEvent(id);
  }
}
