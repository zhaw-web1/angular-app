import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPreviewComponent} from './preview/news-preview.component';
import {NewsTitleComponent} from './title/news-title.component';
import {NewsComponent} from './news.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {NewsContentComponent} from './content/news-content.component';
import {NewsParagraphComponent} from './paragraph/news-paragraph.component';
import {NewsImageComponent} from './image/news-image.component';
import {OverviewComponent} from './overview/overview.component';
import {NewsRoutingModule} from './news-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    AngularFirestoreModule
  ],
  declarations: [NewsComponent,
    NewsPreviewComponent,
    NewsParagraphComponent,
    NewsTitleComponent,
    NewsImageComponent,
    NewsContentComponent,
    OverviewComponent,
    DetailComponent]
})
export class NewsModule { }
