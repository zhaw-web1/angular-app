import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../header/header.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SosEvent} from '../../../events/sos-event.model';
import {firestore} from 'firebase';
import {EventService} from '../../../events/event.service';

@Component({
  selector: 'app-events-admin-add',
  templateUrl: './events-admin-add.component.html',
  styleUrls: ['./events-admin-add.component.scss']
})
export class EventsAdminAddComponent implements OnInit {

  event: SosEvent = {
    id: '',
    date: firestore.Timestamp.now(),
    time: firestore.Timestamp.now(),
    title: '',
  } as SosEvent;

  loading: boolean;

  constructor(
    private header: HeaderService,
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.header.setTitle('Add Event');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
  }

  submit() {
    if (this.loading) return;

    this.loading = true;
    this.eventService.createEvent(this.event).then(success => {
      this.loading = false;
      this.router.navigate(['/', 'admin', 'events', success.id]);
    });
  }
}
