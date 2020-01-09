import { Selector } from '@ngxs/store';

import { SignInRequestState } from './sign-in.request.state';
import { IRequestsNestedState } from '../../requests.interface';

export class SignInRequestGetterState {

  @Selector([SignInRequestState])
  static getSignInRequestState(state: IRequestsNestedState) {
    return state;
  }
}
