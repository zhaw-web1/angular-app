import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public firstname: string;
  public surname: string;
  public email: string;
  public phone: string;
  public message: string;
  public isChecked: boolean;
  public subject = '';

  constructor(
    private contact: ContactService
  ) { }

  ngOnInit() {
  }

  send() {
    const data = {
      name: `${this.firstname} ${this.surname}`,
      email: this.email,
      phone: this.phone,
      text: this.message,
      subject: this.subject
    };
    this.contact.send(data);
  }

}
