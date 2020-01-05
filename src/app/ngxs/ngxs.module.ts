import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { environment } from '../../environments/environment';
import { AuthState } from './auth/auth.state';
import { SignInRequestState } from './requests/auth/sign-in/sign-in.request.state';
import { SignUpRequestState } from './requests/auth/sign-up/sign-up.request.state';

@NgModule({
  imports: [
    NgxsModule.forRoot(
    [
      AuthState,
      // requests
      SignInRequestState,
      SignUpRequestState,
    ],
      { developmentMode: !environment.production },
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
  ],
})
export class NgxsStoreModule {
}
