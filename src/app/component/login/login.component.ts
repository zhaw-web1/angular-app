import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.isLoggedIn().pipe(
      take(1)
    ).subscribe(loggedIn => {
      if (!loggedIn) this.auth.login();
    });

  }

}
