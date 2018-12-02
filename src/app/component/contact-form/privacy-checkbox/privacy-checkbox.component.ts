import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-checkbox',
  templateUrl: './privacy-checkbox.component.html',
  styleUrls: ['./privacy-checkbox.component.scss']
})
export class PrivacyCheckboxComponent implements OnInit {

  isChecked = false;

  constructor() { }

  ngOnInit() {
  }

}
