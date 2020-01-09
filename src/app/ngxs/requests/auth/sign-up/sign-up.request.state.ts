import { HttpErrorResponse } from '@angular/common/http';

import { Action, State, StateContext } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import {
  requestInitialState,
  requestLoadingState,
  requestSuccessState,
  requestFailState,
} from '../../../utils';
import { IRequestsNestedState } from '../../requests.interface';

import {
  SignUpRequest,
  SignUpRequestFail,
  SignUpRequestSuccess,
} from './sign-up.request.actions';
import { ApiService } from '../../../../core/general/api.service';
import { AuthResponse } from '../../../../shared/models/auth-response.model';
import { SignUpFail, SignUpSuccess } from '../../../auth/auth.actions';
import { ShowSnackAction } from '../../../application/application.actions';

@State<IRequestsNestedState>({
  name: 'signUpRequestState',
  defaults: requestInitialState,
})
export class SignUpRequestState {

  constructor(
    private apiService: ApiService,
  ) {
  }

  @Action(SignUpRequest)
  signInRequest({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignUpRequest) {
    patchState(requestLoadingState);
    const url = 'register/';
    const input = {
      ...payload,
      username: payload.username,
      first_name: '',
      last_name: '',
      email: `${payload.username}@user.com`,
    };
    return this.apiService.postApi<AuthResponse>(url, input).pipe(
      switchMap(res => {
        return dispatch(new SignUpRequestSuccess(res));
      }),
      catchError((error: HttpErrorResponse) => {
        return dispatch(new SignUpRequestFail(error));
      }),
    );
  }

  @Action(SignUpRequestSuccess)
  signInRequestSuccess({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignUpRequestSuccess) {
    patchState(requestSuccessState(payload));
    dispatch(payload.success ? new SignUpSuccess(payload.token) : new ShowSnackAction(payload.message));
  }

  @Action(SignUpRequestFail)
  signInRequestFail({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignUpRequestFail) {
    patchState(requestFailState(payload));
    dispatch(new SignUpFail(payload));
  }
}
