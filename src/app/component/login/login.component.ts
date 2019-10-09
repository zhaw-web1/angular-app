import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.auth.isLoggedIn().pipe(
      take(1)
    ).subscribe(loggedIn => {
      if (!loggedIn) this.auth.login();
      else this.router.navigate(['admin']);
    });

  }

}
