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
  SignInRequest,
  SignInRequestFail,
  SignInRequestSuccess,
} from './sign-in.request.actions';
import { SignInFail, SignInSuccess } from '../../../auth/auth.actions';
import { ApiService } from '../../../../core/general/api.service';
import { AuthResponse } from '../../../../shared/models/auth-response.model';
import { ShowSnackAction } from '../../../application/application.actions';

@State<IRequestsNestedState>({
  name: 'signInRequestState',
  defaults: requestInitialState,
})
export class SignInRequestState {

  constructor(
    private apiService: ApiService,
  ) {
  }

  @Action(SignInRequest)
  signInRequest({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignInRequest) {
    patchState(requestLoadingState);
    const url = 'login/';
    return this.apiService.postApi<AuthResponse>(url, payload).pipe(
      switchMap(res => {
        return dispatch(new SignInRequestSuccess(res));
      }),
      catchError((error: HttpErrorResponse) => {
        return dispatch(new SignInRequestFail(error));
      }),
    );
  }

  @Action(SignInRequestSuccess)
  signInRequestSuccess({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignInRequestSuccess) {
    patchState(requestSuccessState(payload));
    dispatch(payload.success ? new SignInSuccess(payload.token) : new ShowSnackAction(payload.message));
  }

  @Action(SignInRequestFail)
  signInRequestFail({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: SignInRequestFail) {
    patchState(requestFailState(payload));
    dispatch(new SignInFail(payload));
  }
}
