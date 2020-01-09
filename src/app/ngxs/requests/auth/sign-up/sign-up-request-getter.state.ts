import { Selector } from '@ngxs/store';

import { SignUpRequestState } from './sign-up.request.state';
import { IRequestsNestedState } from '../../requests.interface';

export class SignUpRequestGetterState {

  @Selector([SignUpRequestState])
  static getSignUpRequestState(state: IRequestsNestedState) {
    return state;
  }
}
