import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderService} from '../../../header/header.service';
import {EventService} from '../../../events/event.service';
import {SosEvent} from '../../../events/sos-event.model';

@Component({
  selector: 'app-events-admin-edit',
  templateUrl: './events-admin-edit.component.html',
  styleUrls: ['./events-admin-edit.component.scss']
})
export class EventsAdminEditComponent implements OnInit {
  event: SosEvent = {} as SosEvent;
  loading = true;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private header: HeaderService
  ) {
  }

  ngOnInit() {
    this.header.setTitle('Admin - Edit Event');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f');
    this.id = this.route.snapshot.paramMap.get('event');
    this.eventService.getEvent(this.id).subscribe(event => {
      this.event = event;
      this.loading = false;
    });
  }

  submit() {
    this.loading = true;
    this.eventService.updateEvent(this.id, this.event).then(() => {
      this.loading = false;
    });
  }
}
