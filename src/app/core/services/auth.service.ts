import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ClearToken, SignIn, SignUp } from '../../ngxs/auth/auth.actions';
import { AuthGetterState } from '../../ngxs/auth/auth-getter.state';
import { SignInRequestGetterState } from '../../ngxs/requests/auth/sign-in/sign-in-request-getter.state';
import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';
import { SignUpRequestGetterState } from '../../ngxs/requests/auth/sign-up/sign-up-request-getter.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  @Select(AuthGetterState.isGuest)
  isGuest$: Observable<boolean>;

  @Select(SignInRequestGetterState.getSignInRequestState)
  signInRequestState$: Observable<IRequestsNestedState>;

  @Select(SignUpRequestGetterState.getSignUpRequestState)
  signUpRequestState$: Observable<IRequestsNestedState>;

  constructor(
    private store: Store,
  ) {
  }

  signUp(data) {
    this.store.dispatch(new SignUp(data));
  }

  signIn(data) {
    this.store.dispatch(new SignIn(data));
  }

  logOut() {
    this.store.dispatch(new ClearToken());
  }
}
