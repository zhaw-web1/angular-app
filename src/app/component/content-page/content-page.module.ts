import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentPageComponent} from './content-page.component';
import {ContentComponent} from './content/content.component';
import {ImageContentComponent} from './content/image-content/image-content.component';
import {TitleContentComponent} from './content/title-content/title-content.component';
import {ParagraphContentComponent} from './content/paragraph-content/paragraph-content.component';
import {ContentPageRoutingModule} from './content-page-routing.module';
import {ContentService} from './content.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    ContentPageComponent,
    ContentComponent,
    ImageContentComponent,
    TitleContentComponent,
    ParagraphContentComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule,
    AngularFirestoreModule
  ],
  exports: [
    ContentPageComponent
  ],
  providers: [ContentService]
})
export class ContentPageModule { }
