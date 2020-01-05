import { State } from '@ngxs/store';

import { SignInRequestState } from './auth/sign-in/sign-in.request.state';
import { SignUpRequestState } from './auth/sign-up/sign-up.request.state';

@State<{}>({
  name: 'requests',
  defaults: {},
  children: [
    SignInRequestState,
    SignUpRequestState,
  ],
})
export class RequestsState {
}
