import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormValidationErrorModule } from './modules/form-validation-error/form-validation-error.module';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationErrorModule,
  ],
})
export class SharedModule {
}
