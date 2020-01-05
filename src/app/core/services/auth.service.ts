import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SignIn, SignUp } from '../../ngxs/auth/auth.actions';
import { AuthGetterState } from '../../ngxs/auth/auth-getter.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  @Select(AuthGetterState.isGuest)
  isGuest$: Observable<boolean>;

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

}
