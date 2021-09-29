import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  username: string;
}

export function createInitialState(): SessionState {
  return {
    username: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', resettable: true })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
