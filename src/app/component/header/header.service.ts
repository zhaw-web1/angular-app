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

  private _image = 'https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
        '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8';
  private _imageEmitter: Subject<string> = new Subject();

  set image(image: string) {
    this._image = image;
    this._imageEmitter.next(image);
  }

  get imageEmitter(): Observable<string> {
    return this._imageEmitter;
  }

  constructor(
    private titleService: Title
  ) { }


  setTitle(title: string) {
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
