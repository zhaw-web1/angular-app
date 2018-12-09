import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import {EventService} from './event.service';

@NgModule({
  declarations: [EventPreviewComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  providers: [
    EventService
  ],
  exports: [
    EventPreviewComponent
  ]
})
export class EventsModule { }
