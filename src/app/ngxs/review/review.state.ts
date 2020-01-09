import { Action, State, StateContext, Store } from '@ngxs/store';

import { Review } from '../../shared/models/review.model';
import {
  GetProductReviews,
  PostProductReview,
  SetProductReviews,
} from './review.actions';
import { GetProductReviewsRequest } from '../requests/review/get-product-reviews/get-product-reviews.request.actions';
import { AuthGetterState } from '../auth/auth-getter.state';
import { ProductGetterState } from '../product/product-getter.state';
import { PostProductReviewRequest } from '../requests/review/post-product-review/post-product-review.request.actions';
import { AuthService } from '../../core/services/auth.service';

export interface ReviewStateModel {
  entities: { [key: string]: Review };
  ids: string[];
}
@State<ReviewStateModel>({
  name: 'review',
  defaults: {
    entities: {},
    ids: null,
  },
})
export class ReviewState {

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {
  }

  @Action(GetProductReviews)
  getProductReviews({ dispatch }: StateContext<ReviewStateModel>, { payload }: GetProductReviews) {
    dispatch(new GetProductReviewsRequest(payload));
  }

  @Action(SetProductReviews)
  setProductReviews({ patchState }: StateContext<ReviewStateModel>, { payload }: SetProductReviews) {
    const ids = payload.map(product => product.id);
    const entities = payload.reduce((acc, product) => ({
      ...acc,
      [product.id]: product,
    }), {});
    patchState({
      ids,
      entities,
    });
  }

  @Action(PostProductReview)
  postProductReview({ dispatch }: StateContext<ReviewStateModel>, { payload }: PostProductReview ) {
    const token = this.store.selectSnapshot(AuthGetterState.getToken);
    const id = this.store.selectSnapshot(ProductGetterState.getSelectedProduct).id;
    const input = {
      headers: {
        authorization: `Token ${token}`,
      },
      id,
      ...payload,
    };

    dispatch(new PostProductReviewRequest(input));
  }
}
