import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Person} from '../../../person';
import {FileUploadService} from '../../file-upload.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  @Input()
  person: Person = {
    id: '',
    name: '',
    nickname: '',
    avatarUrl: '',
    role: '',
    social: {
      email: '',
      twitter: ''
    }
  } as Person;

  @Input()
  provideId = false;

  @Output()
  submit: EventEmitter<Person> = new EventEmitter();

  @ViewChild('form')
  form: NgForm;

  personImage: Blob[];

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  async savePersonImage(event) {
    if (event.target.files && event.target.files.length) {
      this.personImage = event.target.files;
      await this.uploadPersonImage();
    }
  }

  async uploadPersonImage() {
    const [personImage]: Blob[] = this.personImage;
    if (!this.person.id) {
      this.person.id = this.person.nickname.toLowerCase();
    }

    try {
      const upload = this.fileUploadService.uploadImage(personImage, `staff/images/${this.person.id}/avatar`, personImage.type);
      const percentageChangeSubscription = upload.percentageChanges().subscribe(num => console.log(`upload: ${num}%`));

      const uploaded = await upload;
      percentageChangeSubscription.unsubscribe();

      this.person.avatarUrl = await uploaded.ref.getDownloadURL();
      this.person.usesNewImage = true;
    } catch (ex) {
      console.error(ex);
      try {
        window.alert('Image could not be uploaded');
      } catch (error) {
        if (!(error instanceof ReferenceError)) throw error;
      }
    }
  }

  _submit() {
    this.submit.emit(this.person);
  }
}
