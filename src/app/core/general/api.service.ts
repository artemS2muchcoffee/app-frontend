import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_URL } from './headers';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getApi<T>(apiEndPoint: string, options = {}): Observable<T> {
    const url = API_URL + apiEndPoint;
    return this.httpClient.get<T>(url, options).pipe(catchError(this.logError));
  }

  postApi<T>(apiEndPoint: string, body, options = {}): Observable<T> {
    const url = API_URL + apiEndPoint;
    return this.httpClient
      .post<T>(url, body, options)
      .pipe(catchError(this.logError));
  }

  private logError(error: HttpErrorResponse) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg);

    return observableThrowError(error);
  }
}
