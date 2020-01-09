import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SpinnerComponent,
  ],
})
export class SpinnerModule {
}
