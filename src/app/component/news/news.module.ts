import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsPreviewComponent} from './news-preview/news-preview.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {TitleComponent} from './title/title.component';
import {ImageComponent} from './image/image.component';
import {NewsComponent} from './news.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsComponent, NewsPreviewComponent, ParagraphComponent, TitleComponent, ImageComponent]
})
export class NewsModule { }
