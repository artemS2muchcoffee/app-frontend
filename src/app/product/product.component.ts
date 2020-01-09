import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  isGuest$: Observable<boolean>;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isGuest$ = this.authService.isGuest$;
  }

  logOut() {
    this.authService.logOut();
  }
}
