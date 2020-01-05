import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationErrorComponent } from './form-validation-error.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  id: 'form-control',
  declarations: [
    FormValidationErrorComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [
    FormValidationErrorComponent
  ]
})
export class FormValidationErrorModule { }
