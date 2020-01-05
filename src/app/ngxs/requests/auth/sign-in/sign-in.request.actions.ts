import { HttpErrorResponse } from '@angular/common/http';

import { AuthResponse } from '../../../../shared/models/auth-response.model';
import { Auth } from '../../../../shared/models/auth.model';

const ActionTypes = {
  SIGN_IN_REQUEST: '[Requests] Sign In',
  SIGN_IN_REQUEST_SUCCESS: '[Requests] Sign In Success',
  SIGN_IN_REQUEST_FAIL: '[Requests] Sign In Fail',
};

export class SignInRequest {
  static type = ActionTypes.SIGN_IN_REQUEST;

  constructor(public payload: Auth) {
  }
}

export class SignInRequestSuccess {
  static type = ActionTypes.SIGN_IN_REQUEST_SUCCESS;

  constructor(public payload: AuthResponse) {
  }
}

export class SignInRequestFail {
  static type = ActionTypes.SIGN_IN_REQUEST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
