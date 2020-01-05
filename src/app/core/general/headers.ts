import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

export const API_URL = `${environment.SERVER_URL}/api/`;

export const contentHttpClientHeaders = new HttpHeaders()
  .append('Accept', 'application/json')
  .append('Content-Type', 'application/json');
