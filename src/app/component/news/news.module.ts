import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPreviewComponent} from './preview/news-preview.component';
import {NewsTitleComponent} from './title/news-title.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NewsContentComponent} from './content/news-content.component';
import {NewsParagraphComponent} from './paragraph/news-paragraph.component';
import {NewsImageComponent} from './image/news-image.component';
import {NewsOverviewComponent} from './overview/news-overview.component';
import {NewsRoutingModule} from './news-routing.module';
import { NewsDetailComponent } from './detail/news-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    AngularFirestoreModule
  ],
  declarations: [
    NewsPreviewComponent,
    NewsParagraphComponent,
    NewsTitleComponent,
    NewsImageComponent,
    NewsContentComponent,
    NewsOverviewComponent,
    NewsDetailComponent],
  exports: [NewsPreviewComponent]
})
export class NewsModule { }
