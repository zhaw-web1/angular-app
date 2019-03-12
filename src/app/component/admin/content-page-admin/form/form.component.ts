import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../../../content-page/page.model';
import {Content, Image, Paragraph, Quote, Title} from '../../../content-page';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {firestore} from 'firebase';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';
import {FileUploadService} from '../../file-upload.service';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contentType: string;

  @Input()
  page: Page = {} as Page;

  @Output()
  submit: EventEmitter<Page> = new EventEmitter();

  mobile = false;

  contentTypes: ['title', 'paragraph', 'image', 'quote'];

  constructor(
    private fileUploadService: FileUploadService,
    private mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.mobile = this.mediaObserver.isActive('sos.mobile');
  }

  _submit() {
    this.submit.emit(this.page);
  }

  addContent(type: string) {
    const content = this.getContentForType(type);
    if (content === null) return;
    this.page.content.push(content);
    this._submit();
  }

  getContentForType(type: string): Content {
    if (type === 'title') return this.getBlankTitle();
    else if (type === 'paragraph') return this.getBlankParagraph();
    else if (type === 'image') return this.getBlankImage();
    else if (type === 'quote') return this.getBlankQuote();
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

  getBlankQuote(): Quote {
    return {
      type: 'quote',
      quote: '',
      author: ''
    };
  }

  removeContent(el: Content) {
    if (this.page.content.indexOf(el) === -1) return;
    this.page.content.splice(this.page.content.indexOf(el), 1);
    this._submit();
  }

  drop(event: CdkDragDrop<Content[]>) {
    moveItemInArray(this.page.content, event.previousIndex, event.currentIndex);
  }

  getTimestamp(date: string) {
    if (!date) return null;
    return firestore.Timestamp.fromDate(new Date(date));
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  uploadImage(event) {
    if (event.target.files && event.target.files.length) {
      const [file]: Blob[] = event.target.files;
      const upload = this.fileUploadService.uploadImage(file, `content-page/images/${this.page.id}/thumbnail`, file.type);

      const percentageChangeSubscription = upload.percentageChanges().subscribe(num => console.log(`upload: ${num}%`));

      upload.catch(err => console.error(err))
        .then(() => {
          try {
            percentageChangeSubscription.unsubscribe();
          } catch (ex) {}
          this.page.usesNewImage = true;
          this._submit();
          console.log('done');
        });
    }
  }
}
