import { Injectable } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { RequestsGetterState } from '../../ngxs/requests/requests-getter-state';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {

  @Select(RequestsGetterState.getShowRequestsSpinner)
  isLoading$: Observable<boolean>;
}
