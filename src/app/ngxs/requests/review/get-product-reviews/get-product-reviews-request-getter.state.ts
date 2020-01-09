import { Selector } from '@ngxs/store';

import { GetProductReviewsRequestState } from './get-product-reviews.request.state';
import { IRequestsNestedState } from '../../requests.interface';

export class GetProductReviewsRequestGetterState {

  @Selector([GetProductReviewsRequestState])
  static getProductReviewsRequestState(state: IRequestsNestedState) {
    return state;
  }
}
