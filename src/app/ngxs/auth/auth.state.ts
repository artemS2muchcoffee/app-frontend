import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';

import { Navigate } from '@ngxs/router-plugin';

import { SignInRequest } from '../requests/auth/sign-in/sign-in.request.actions';
import { SessionService } from '../../core/services/session.service';
import {
  CheckTokenInLocalStorage,
  ClearToken,
  SetToken,
  SignIn,
  SignInSuccess,
  SignUp,
  SignUpSuccess,
} from './auth.actions';
import { SignUpRequest } from '../requests/auth/sign-up/sign-up.request.actions';

export interface AuthStateModel {
  token: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
  },
})

export class AuthState implements NgxsOnInit {

  constructor(
    private sessionService: SessionService,
  ) {
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new CheckTokenInLocalStorage());
  }

  @Action(CheckTokenInLocalStorage)
  checkToken({ dispatch }: StateContext<AuthStateModel>) {
    const token = this.sessionService.getSessionToken();
    const expiration = this.sessionService.getExpirationDate();
    const expirationDate = new Date(expiration);
    const now = new Date();
    dispatch(token && (expirationDate > now) ? new SetToken(token) : new ClearToken());
  }

  @Action(SignUp)
  signUp({ dispatch }: StateContext<AuthStateModel>, { payload }: SignUp) {
    dispatch(new SignUpRequest(payload));
  }

  @Action(SignUpSuccess)
  signUpSuccess({ dispatch }: StateContext<AuthStateModel>, { payload }: SignUpSuccess) {
    const token: string = payload;
    this.sessionService.setSessionToken(token);
    this.sessionService.setExpirationDate();
    dispatch(new SetToken(token));
  }

  @Action(SignIn)
  signIn({ dispatch }: StateContext<AuthStateModel>, { payload }: SignIn) {
    dispatch(new SignInRequest(payload));
  }

  @Action(SignInSuccess)
  signInSuccess({ dispatch }: StateContext<AuthStateModel>, { payload }: SignInSuccess) {
    const token: string = payload;
    this.sessionService.setSessionToken(token);
    dispatch(new SetToken(token));
  }

  @Action(SetToken)
  setToken({ patchState }: StateContext<AuthStateModel>, { payload }: SetToken) {
    patchState({
      token: payload,
    });
  }

  @Action(ClearToken)
  clearToken({ patchState, dispatch }: StateContext<AuthStateModel>) {
    patchState({
      token: null,
    });
    this.sessionService.removeSessionToken();
    this.sessionService.removeExpirationDate();
    dispatch(new Navigate(['/', 'auth', '/', 'sign-in']));
  }

}
