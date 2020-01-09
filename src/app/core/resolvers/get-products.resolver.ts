import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';
import { ProductService } from '../services/product.service';
import { IRequestsNestedStatus } from '../../shared/enums/i-requests-nested-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GetProductsResolver implements Resolve<Observable<IRequestsNestedState>> {

  constructor(
    private productService: ProductService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRequestsNestedState> {
    this.productService.getProducts();

    return this.productService.getProductsRequestState$.pipe(
      filter(res => res.status === IRequestsNestedStatus.Success && res.loaded === true),
      take(1),
    );
  }
}
