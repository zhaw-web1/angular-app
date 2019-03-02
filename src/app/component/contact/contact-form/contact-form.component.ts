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

  public loading = false;
  public successMessage = 'Thank you for reaching out to us! We will come back to you shortly.';
  public showSuccess = false;
  public errorMessage = 'The form could not be send. Please write directly to info@scytheofseraph.com';
  public showError = false;
  public submitValue = 'Submit';

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
    this.loading = true;
    this.submitValue = '';
    this.contact.send(data).subscribe(res => {
          this.showSuccess = true;
          this.loading = false;
          this.submitValue = 'Submit';
      },
        err => {
          this.showError = true;
          this.loading = false;
          this.submitValue = 'Submit';
    });
  }

}
