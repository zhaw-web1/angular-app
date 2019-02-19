import {EventEmitter, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private set title(title: string) {
    this._title = title;
    this._titleEmitter.next(title);
    this.titleService.setTitle(title);
  }

  get titleEmitter(): Observable<string> {
    return this._titleEmitter;
  }

  private _title = '';
  private _titleEmitter: Subject<string> = new Subject();

  private _image = 'https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com/o/header-images%2F' +
    'desktop-header.jpg?alt=media&token=560a02d4-e69e-44bd-8677-14e649174c5f';
  private _imageEmitter: Subject<string> = new Subject();

  private _hideTitle = false;
  private _hideTitleEmitter: Subject<boolean> = new Subject();

  set image(image: string) {
    this._image = image;
    this._imageEmitter.next(image);
  }

  get imageEmitter(): Observable<string> {
    return this._imageEmitter;
  }

  set hideTitle(hide: boolean) {
    this._hideTitle = hide;
    this._hideTitleEmitter.next(hide);
  }

  get hideTitleEmitter(): Observable<boolean> {
    return this._hideTitleEmitter;
  }

  constructor(
    private titleService: Title
  ) { }


  setTitle(title: string) {
    this.hideTitle = title === '';
    this.title = title;
  }

  setImage(image: string) {
    this.image = image;
  }

  set(title: string, image: string) {
    this.image = image;
    this.title = title;
  }
}
