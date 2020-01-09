import { State } from '@ngxs/store';

import { SignInRequestState } from './auth/sign-in/sign-in.request.state';
import { SignUpRequestState } from './auth/sign-up/sign-up.request.state';
import { GetProductsRequestState } from './product/get-products/get-products.request.state';
import { GetProductReviewsRequestState } from './review/get-product-reviews/get-product-reviews.request.state';
import { PostProductReviewRequestState } from './review/post-product-review/post-product-review.request.state';

@State<{}>({
  name: 'requests',
  defaults: {},
  children: [
    SignInRequestState,
    SignUpRequestState,
    GetProductsRequestState,
    GetProductReviewsRequestState,
    PostProductReviewRequestState,
  ],
})
export class RequestsState {
}
