import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsPreviewComponent} from './news-preview/news-preview.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {TitleComponent} from './title/title.component';
import {ImageComponent} from './image/image.component';
import {NewsComponent} from './news.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { NewsContentComponent } from './news-content/news-content.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  declarations: [NewsComponent, NewsPreviewComponent, ParagraphComponent, TitleComponent, ImageComponent, NewsContentComponent]
})
export class NewsModule { }
