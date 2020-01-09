import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import {
  GetProductReviewsRequestGetterState,
} from '../../ngxs/requests/review/get-product-reviews/get-product-reviews-request-getter.state';
import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';
import { GetProductReviews, PostProductReview } from '../../ngxs/review/review.actions';
import { ReviewGetterState } from '../../ngxs/review/review-getter.state';
import { Review } from '../../shared/models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  @Select(GetProductReviewsRequestGetterState.getProductReviewsRequestState)
  getProductReviewsRequestState$: Observable<IRequestsNestedState>;

  @Select(ReviewGetterState.getReviews)
  reviews$: Observable<Review[]>;

  @Select(ReviewGetterState.getCommonProductRate)
  commonProductRate$: Observable<number>;

  constructor(
    private store: Store,
  ) {
  }

  getProductReviews(id: string) {
    this.store.dispatch(new GetProductReviews(id));
  }

  postProductReview(data) {
    this.store.dispatch(new PostProductReview(data));
  }
}
