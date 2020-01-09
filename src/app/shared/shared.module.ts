import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormValidationErrorModule } from './modules/form-validation-error/form-validation-error.module';
import { AuthFormModule } from './modules/auth-form/auth-form.module';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationErrorModule,
    AuthFormModule,
  ],
})
export class SharedModule {
}
