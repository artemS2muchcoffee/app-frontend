import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsNotAuthenticatedGuard implements CanLoad, CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private authService: AuthService,
  ) {
  }

  canLoad(route: Route): Observable<boolean> {
    return this.guard();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.guard();
  }

  guard() {
    return this.authService.isGuest$.pipe(
      tap(isGuest => {
        if (!isGuest) {
          this.router.navigate(['/product']);
        }
      }),
      take(1),
    );
  }
}
