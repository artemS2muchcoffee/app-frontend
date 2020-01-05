import { HttpErrorResponse } from '@angular/common/http';

import { Auth } from '../../../../shared/models/auth.model';
import { AuthResponse } from '../../../../shared/models/auth-response.model';

const ActionTypes = {
  SIGN_UP_REQUEST: '[Requests] Sign Up',
  SIGN_UP_REQUEST_SUCCESS: '[Requests] Sign Up Success',
  SIGN_UP_REQUEST_FAIL: '[Requests] Sign Up Fail',
};

export class SignUpRequest {
  static type = ActionTypes.SIGN_UP_REQUEST;

  constructor(public payload: Auth) {
  }
}

export class SignUpRequestSuccess {
  static type = ActionTypes.SIGN_UP_REQUEST_SUCCESS;

  constructor(public payload: AuthResponse) {
  }
}

export class SignUpRequestFail {
  static type = ActionTypes.SIGN_UP_REQUEST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
