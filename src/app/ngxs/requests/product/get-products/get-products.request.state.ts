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
  GetProductsRequest,
  GetProductsRequestFail,
  GetProductsRequestSuccess,
} from './get-products.request.actions';
import { Product } from '../../../../shared/models/product.model';
import { SetProducts } from '../../../product/product.actions';

@State<IRequestsNestedState>({
  name: 'getProductsRequestState',
  defaults: requestInitialState,
})
export class GetProductsRequestState {

  constructor(
    private apiService: ApiService,
  ) {
  }

  @Action(GetProductsRequest)
  getProductsRequest({ patchState, dispatch }: StateContext<IRequestsNestedState>) {
    patchState(requestLoadingState);
    const url = 'products/';
    return this.apiService.getApi<Product[]>(url).pipe(
      switchMap(res => {
        return dispatch(new GetProductsRequestSuccess(res));
      }),
      catchError((error: HttpErrorResponse) => {
        return dispatch(new GetProductsRequestFail(error));
      }),
    );
  }

  @Action(GetProductsRequestSuccess)
  getProductsRequestSuccess({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: GetProductsRequestSuccess) {
    patchState(requestSuccessState(payload));
    dispatch(new SetProducts(payload));
  }

  @Action(GetProductsRequestFail)
  getProductsRequestFail({ patchState, dispatch }: StateContext<IRequestsNestedState>, { payload }: GetProductsRequestFail) {
    patchState(requestFailState(payload));
  }
}
