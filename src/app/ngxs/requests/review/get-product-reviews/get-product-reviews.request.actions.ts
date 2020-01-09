import { HttpErrorResponse } from '@angular/common/http';
import { Review } from '../../../../shared/models/review.model';

const ActionTypes = {
  GET_PRODUCT_REVIEWS_REQUEST: '[Requests] Get Product Reviews Request',
  GET_PRODUCT_REVIEWS_REQUEST_SUCCESS: '[Requests] Get Product Reviews Success',
  GET_PRODUCT_REVIEWS_REQUEST_FAIL: '[Requests] Get Product Reviews Fail',
};

export class GetProductReviewsRequest {
  static type = ActionTypes.GET_PRODUCT_REVIEWS_REQUEST;

  constructor(public payload: string) {
  }
}

export class GetProductReviewsRequestSuccess {
  static type = ActionTypes.GET_PRODUCT_REVIEWS_REQUEST_SUCCESS;

  constructor(public payload: Review[]) {
  }
}

export class GetProductReviewsRequestFail {
  static type = ActionTypes.GET_PRODUCT_REVIEWS_REQUEST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
