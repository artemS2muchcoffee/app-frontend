import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CombineSubscriptions } from 'ngx-destroy-subscribers';
import { Unsubscribable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthType } from '../../shared/enums/auth-type.enum';
import { AuthService } from '../../core/services/auth.service';
import { IRequestsNestedStatus } from '../../shared/enums/i-requests-nested-status.enum';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  @CombineSubscriptions()
  protected subscribers: Unsubscribable;

  type = AuthType;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.subscribers = this.authService.signUpRequestState$.pipe(
      filter(res => res.status === IRequestsNestedStatus.Success && res.loaded === true),
    ).subscribe(
      () => this.router.navigate(['/', 'product'])
    );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
