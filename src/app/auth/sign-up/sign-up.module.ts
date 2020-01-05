import {NgModule} from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    SignUpRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})

export class SignUpModule {
}
