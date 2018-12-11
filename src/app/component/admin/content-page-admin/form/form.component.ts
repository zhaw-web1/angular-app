import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../../../content-page/page.model';
import {Content, Image, Paragraph, Title} from '../../../content-page';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contentId: number;
  contentType: string;

  @Input()
  page: Page = {} as Page;

  @Output()
  submit: EventEmitter<Page> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _submit() {
    this.submit.emit(this.page);
  }

  addContent(id: number, type: string) {
    this.page.content[id] = this.getContentForType(type);
    this._submit();
  }

  getContentForType(type: string): Content {
    if (type === 'title') return this.getBlankTitle();
    else if (type === 'paragraph') return this.getBlankParagraph();
    else if (type === 'image') return this.getBlankImage();
    else return null;
  }

  getBlankTitle(): Title {
    return {
      type: 'title',
      title: ''
    } as Title;
  }

  getBlankParagraph(): Paragraph {
    return {
      type: 'paragraph',
      text: '',
      title: {}
    } as Paragraph;
  }

  getBlankImage(): Image {
    return {
      type: 'image',
      image: ''
    } as Image;
  }

}
