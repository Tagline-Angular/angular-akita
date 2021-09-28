import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore, private http: HttpClient) {
  }

  updateUserName(username: string){
    console.log('update name in store ==>');
    this.sessionStore.update({username})
  }
}
