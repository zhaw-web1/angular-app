import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPreviewComponent} from './preview/news-preview.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NewsOverviewComponent} from './overview/news-overview.component';
import {NewsRoutingModule} from './news-routing.module';
import {InViewportModule} from '@ngx-starter-kit/ngx-utils';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    AngularFirestoreModule,
    InViewportModule,
    AngularFireStorageModule
  ],
  declarations: [
    NewsPreviewComponent,
    NewsOverviewComponent],
  exports: [NewsPreviewComponent]
})
export class NewsModule { }
