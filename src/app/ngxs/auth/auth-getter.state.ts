import { Selector } from '@ngxs/store';

import { AuthState, AuthStateModel } from './auth.state';

export class AuthGetterState {
  @Selector([AuthState])
  static isGuest(state: AuthStateModel) {
    return !state.token;
  }

  @Selector([AuthState])
  static getToken( { token }: AuthStateModel) {
    return token;
  }
}
