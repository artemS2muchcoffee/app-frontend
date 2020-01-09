import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';

import { AuthFormComponent } from './auth-form.component';
import { FormValidationErrorModule } from '../form-validation-error/form-validation-error.module';

@NgModule({
  id: 'auth-form',
  declarations: [
    AuthFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormValidationErrorModule,
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthFormModule {
}
