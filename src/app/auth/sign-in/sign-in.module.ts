import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SignInRoutingModule,
    SharedModule,
  ],
})
export class SignInModule {
}
