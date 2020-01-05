import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';

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
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SignInModule {
}
