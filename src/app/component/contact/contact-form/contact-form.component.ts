import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
