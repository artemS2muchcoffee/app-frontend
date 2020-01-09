import { NgModule } from '@angular/core';

import { MatDialogModule, MatIconModule } from '@angular/material';

import { SharedModule } from '../../../shared/shared.module';
import { AuthDialogComponent } from './auth-dialog.component';

@NgModule({
  declarations: [
    AuthDialogComponent,
  ],
  imports: [
    SharedModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [AuthDialogComponent],
  entryComponents: [AuthDialogComponent],
})
export class AuthDialogModule {
}
