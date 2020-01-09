import { Selector } from '@ngxs/store';
import { find as _find } from 'lodash';

import { IRequestsNestedState } from './requests.interface';
import { SignInRequestState } from './auth/sign-in/sign-in.request.state';
import { SignUpRequestState } from './auth/sign-up/sign-up.request.state';
import { GetProductsRequestState } from './product/get-products/get-products.request.state';
import { GetProductReviewsRequestState } from './review/get-product-reviews/get-product-reviews.request.state';
import { PostProductReviewRequestState } from './review/post-product-review/post-product-review.request.state';

export class RequestsGetterState {
  @Selector([
    SignInRequestState,
    SignUpRequestState,
    GetProductsRequestState,
    GetProductReviewsRequestState,
    PostProductReviewRequestState,
  ])
  static getShowRequestsSpinner(...state: IRequestsNestedState[]) {
    return !!_find(state, { loading: true });
  }
}
