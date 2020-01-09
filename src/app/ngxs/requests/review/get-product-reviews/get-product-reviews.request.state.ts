import { HttpErrorResponse } from '@angular/common/http';

import { Action, State, StateContext } from '@ngxs/store';
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
  GetProductReviewsRequest,
  GetProductReviewsRequestFail,
  GetProductReviewsRequestSuccess
} from './get-product-reviews.request.actions';
import { Review } from '../../../../shared/models/review.model';
import { SetProductReviews } from '../../../review/review.actions';

@State<IRequestsNestedState>({
  name: 'getProductReviewsRequestState',
  defaults: requestInitialState,
})
export class GetProductReviewsRequestState {

  constructor(
    private apiService: ApiService,
  ) {
  }

  @Action(GetProductReviewsRequest)
  getProductReviewsRequest({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: GetProductReviewsRequest) {
    patchState(requestLoadingState);
    const url = `reviews/${payload}`;
    return this.apiService.getApi<Review[]>(url).pipe(
      switchMap(res => {
        return dispatch(new GetProductReviewsRequestSuccess(res));
      }),
      catchError((error: HttpErrorResponse) => {
        return dispatch(new GetProductReviewsRequestFail(error));
      }),
    );
  }

  @Action(GetProductReviewsRequestSuccess)
  getProductReviewsRequestSuccess(
    { patchState, dispatch }: StateContext<IRequestsNestedState>,
    { payload }: GetProductReviewsRequestSuccess,
  ) {
    patchState(requestSuccessState(payload));
    dispatch(new SetProductReviews(payload));
  }

  @Action(GetProductReviewsRequestFail)
  getProductReviewsRequestFail(
    { patchState, dispatch }: StateContext<IRequestsNestedState>,
    { payload }: GetProductReviewsRequestFail,
  ) {
    patchState(requestFailState(payload));
  }
}
