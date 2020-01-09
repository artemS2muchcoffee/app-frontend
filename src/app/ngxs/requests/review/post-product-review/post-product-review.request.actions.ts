import { HttpErrorResponse } from '@angular/common/http';

const ActionTypes = {
  POST_PRODUCT_REVIEW_REQUEST: '[Requests] Post Product Review Request',
  POST_PRODUCT_REVIEW_REQUEST_SUCCESS: '[Requests] Post Product Review Success',
  POST_PRODUCT_REVIEW_REQUEST_FAIL: '[Requests] Post Product Review Fail',
};

export class PostProductReviewRequest {
  static type = ActionTypes.POST_PRODUCT_REVIEW_REQUEST;

  constructor(public payload: {
    id: string;
    text: string;
    rate: number,
    headers: {
      authorization: string,
    },
  }) {
  }
}

export class PostProductReviewRequestSuccess {
  static type = ActionTypes.POST_PRODUCT_REVIEW_REQUEST_SUCCESS;

  constructor(public payload: { success: string }) {
  }
}

export class PostProductReviewRequestFail {
  static type = ActionTypes.POST_PRODUCT_REVIEW_REQUEST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
