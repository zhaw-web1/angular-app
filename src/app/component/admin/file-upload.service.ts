import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  uploadImage(data: Blob, path: string, contentDisposition?: string, generateThumbnails?: boolean): AngularFireUploadTask {
    let customMetadata = {};
    if (generateThumbnails !== false) {
      customMetadata = {
        'generateThumbnails': 'true'
      };
    }

    return this.storage.upload(path, data, {
      contentDisposition: contentDisposition,
      customMetadata: customMetadata,
    });
  }

}
