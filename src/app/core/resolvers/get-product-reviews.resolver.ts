import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';
import { ProductService } from '../services/product.service';
import { ReviewService } from '../services/review.service';
import { IRequestsNestedStatus } from '../../shared/enums/i-requests-nested-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GetProductReviewsResolver implements Resolve<Observable<IRequestsNestedState>> {

  constructor(
    private productService: ProductService,
    private reviewService: ReviewService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRequestsNestedState> {
    const selectedProductId = route.paramMap.get('id');
    this.productService.selectProduct(selectedProductId);

    this.reviewService.getProductReviews(selectedProductId);
    return this.reviewService.getProductReviewsRequestState$.pipe(
      filter(res => res.status === IRequestsNestedStatus.Success && res.loaded === true),
      take(1),
    );
  }
}
