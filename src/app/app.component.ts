import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session/state/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akita';

  constructor(private sessionService: SessionService, private router: Router) {}

  logout(): void {
    this.sessionService.reset();
    this.router.navigate(['']);
  }
}
