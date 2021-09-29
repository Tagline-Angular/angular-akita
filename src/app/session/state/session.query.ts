import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }

  selectUserName() {
    // to select username
    return this.select((state) => state.username);
  }

  getUserName() {
    // to get username
    return this.getValue().username;
  }
}
