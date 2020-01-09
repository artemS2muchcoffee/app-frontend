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

  setExpirationDate() {
    const expirationDate = new Date(new Date().getTime() + (3600 * 1000) * 3);
    return localStorage.setItem('expiration_Date', expirationDate.toISOString());
  }

  getExpirationDate() {
    return localStorage.getItem('expiration_Date');
  }

  removeExpirationDate() {
    return localStorage.removeItem('expiration_Date');
  }
}
