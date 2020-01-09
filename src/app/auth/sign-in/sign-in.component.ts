import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CombineSubscriptions } from 'ngx-destroy-subscribers';
import { combineLatest, Unsubscribable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthType } from '../../shared/enums/auth-type.enum';
import { AuthService } from '../../core/services/auth.service';
import { IRequestsNestedStatus } from '../../shared/enums/i-requests-nested-status.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  @CombineSubscriptions()
  protected subscribers: Unsubscribable;

  type = AuthType;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.subscribers = combineLatest(
      this.authService.signInRequestState$,
      this.authService.isGuest$,
    ).pipe(
      filter(([res, isGuest]) => res.status === IRequestsNestedStatus.Success && res.loaded === true && isGuest === false),
    ).subscribe(
      () => this.router.navigate(['/', 'product'])
    );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
