import { Selector } from '@ngxs/store';

import { GetProductsRequestState } from './get-products.request.state';
import { IRequestsNestedState } from '../../requests.interface';

export class GetProductsRequestGetterState {

  @Selector([GetProductsRequestState])
  static getProductsRequestState(state: IRequestsNestedState) {
    return state;
  }
}
