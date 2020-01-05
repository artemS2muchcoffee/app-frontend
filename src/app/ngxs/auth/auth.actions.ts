import { HttpErrorResponse } from '@angular/common/http';

import { Auth } from '../../shared/models/auth.model';

const ActionTypes = {
  SIGN_UP: '[Auth] Sign Up',
  SIGN_UP_SUCCESS: '[Auth] Sign Up Success',
  SIGN_UP_FAIL: '[Auth] Sign Up Fail',

  SIGN_IN: '[Auth] Sign In',
  SIGN_IN_SUCCESS: '[Auth] Sign In Success',
  SIGN_IN_FAIL: '[Auth] Sign In Fail',

  SET_TOKEN: `[Auth] Set Token`,
  CHECK_TOKEN_IN_LOCAL_STORAGE: `[Auth] Check Token In Local Storage`,
  CLEAR_TOKEN: `[Auth] Clear Token`,
};

export class SignUp {
  static type = ActionTypes.SIGN_UP;

  constructor(public payload: Auth) {
  }
}

export class SignUpSuccess {
  static type = ActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: string) {
  }
}

export class SignUpFail {
  static type = ActionTypes.SIGN_UP_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class SignIn {
  static type = ActionTypes.SIGN_IN;

  constructor(public payload: Auth) {
  }
}

export class SignInSuccess {
  static type = ActionTypes.SIGN_IN_SUCCESS;

  constructor(public payload: string) {
  }
}

export class SignInFail {
  static type = ActionTypes.SIGN_IN_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class SetToken {
  static type = ActionTypes.SET_TOKEN;

  constructor(public payload: string) {
  }
}

export class CheckTokenInLocalStorage {
  static type = ActionTypes.CHECK_TOKEN_IN_LOCAL_STORAGE;
}

export class ClearToken {
  static type = ActionTypes.CLEAR_TOKEN;
}
