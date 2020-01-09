import { HttpErrorResponse } from '@angular/common/http';

import { Action, State, StateContext, Store } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import { IRequestsNestedState } from '../../requests.interface';
import {
  requestFailState,
  requestInitialState,
  requestLoadingState,
  requestSuccessState,
} from '../../../utils';
import { ApiService } from '../../../../core/general/api.service';
import {
  PostProductReviewRequest,
  PostProductReviewRequestFail,
  PostProductReviewRequestSuccess,
} from './post-product-review.request.actions';
import { ProductGetterState } from '../../../product/product-getter.state';
import { GetProductReviews } from '../../../review/review.actions';
import { ShowSnackAction } from '../../../application/application.actions';

@State<IRequestsNestedState>({
  name: 'postProductReviewRequestState',
  defaults: requestInitialState,
})
export class PostProductReviewRequestState {

  constructor(
    private apiService: ApiService,
    private store: Store,
  ) {
  }

  @Action(PostProductReviewRequest)
  postProductReviewRequest({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: PostProductReviewRequest) {
    patchState(requestLoadingState);
    const { id, headers, text, rate } = payload;
    return this.apiService.postApi<any>(`reviews/${id}`, { text, rate }, { headers }).pipe(
      switchMap(res => {
        return dispatch(new PostProductReviewRequestSuccess(res));
      }),
      catchError((error: HttpErrorResponse) => {
        return dispatch(new PostProductReviewRequestFail(error));
      }),
    );
  }

  @Action(PostProductReviewRequestSuccess)
  postProductReviewRequestSuccess(
    { patchState, dispatch }: StateContext<IRequestsNestedState>,
    { payload }: PostProductReviewRequestSuccess,
  ) {
    patchState(requestSuccessState(payload));
    const id = this.store.selectSnapshot(ProductGetterState.getSelectedProduct).id;
    dispatch( payload.success ? new GetProductReviews(id) : new ShowSnackAction('Add comment fail'));
  }

  @Action(PostProductReviewRequestFail)
  postProductReviewRequestFail(
    { patchState, dispatch }: StateContext<IRequestsNestedState>,
    { payload }: PostProductReviewRequestFail,
  ) {
    patchState(requestFailState(payload));
    dispatch(new ShowSnackAction('Add comment fail'));
  }
}
