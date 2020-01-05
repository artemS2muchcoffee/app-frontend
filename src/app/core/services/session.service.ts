import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
  ) {
  }

  getSessionToken() {
    return localStorage.getItem('app_token');
  }

  setSessionToken(token: string) {
    return localStorage.setItem('app_token', token);
  }

  removeSessionToken() {
    return localStorage.removeItem('app_token');
  }
}
