import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionQuery } from './session/state/session.query';
import { SessionService } from './session/state/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akita';
  username$: Observable<string>;
  isLoginScreen: boolean = false;

  constructor(
    private sessionQuery: SessionQuery,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url === '/auth/login')
          this.isLoginScreen = true;
        else this.isLoginScreen = false;
      }
    });
    this.username$ = this.sessionQuery.selectUserName();
  }

  logout(): void {
    this.sessionService.reset();
    this.router.navigate(['']);
  }
}
