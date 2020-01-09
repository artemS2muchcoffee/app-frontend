import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { CombineSubscriptions } from 'ngx-destroy-subscribers';
import { BehaviorSubject, merge, Unsubscribable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthType } from '../../../shared/enums/auth-type.enum';
import { AuthService } from '../../../core/services/auth.service';
import { IRequestsNestedStatus } from '../../../shared/enums/i-requests-nested-status.enum';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit, OnDestroy {

  @CombineSubscriptions()
  protected subscribers: Unsubscribable;

  type = AuthType;
  authType$ = new BehaviorSubject<AuthType>(AuthType.SingIn);

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.subscribers = merge(
      this.authService.signInRequestState$,
      this.authService.signUpRequestState$,
    ).pipe(
      filter(res => res.status === IRequestsNestedStatus.Success && res.loaded === true),
    ).subscribe(() => this.dialogRef.close());
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  selectSignIn() {
    this.authType$.next(AuthType.SingIn);
  }

  selectSignUp() {
    this.authType$.next(AuthType.SignUp);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
