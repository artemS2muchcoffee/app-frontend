import { Review } from '../../shared/models/review.model';

const ActionTypes = {
  GET_PRODUCT_REVIEWS: '[Review] Get Product Reviews',
  SET_PRODUCT_REVIEWS: '[Review] Set Product Reviews',

  POST_PRODUCT_REVIEW: '[Review] Post Product Review',
};

export class GetProductReviews {
  static type = ActionTypes.GET_PRODUCT_REVIEWS;

  constructor(public payload: string) {
  }
}

export class SetProductReviews {
  static type = ActionTypes.SET_PRODUCT_REVIEWS;

  constructor(public payload: Review[]) {
  }
}

export class PostProductReview {
  static type = ActionTypes.POST_PRODUCT_REVIEW;

  constructor(public payload: { text: string; rate: number }) {
  }
}
