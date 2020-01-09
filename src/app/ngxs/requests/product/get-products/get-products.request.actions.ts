import { HttpErrorResponse } from '@angular/common/http';

import { Product } from '../../../../shared/models/product.model';

const ActionTypes = {
  GET_PRODUCTS_REQUEST: '[Requests] Get Products',
  GET_PRODUCTS_REQUEST_SUCCESS: '[Requests] Get Products Success',
  GET_PRODUCTS_REQUEST_FAIL: '[Requests] Get Products Fail',
};

export class GetProductsRequest {
  static type = ActionTypes.GET_PRODUCTS_REQUEST;
}

export class GetProductsRequestSuccess {
  static type = ActionTypes.GET_PRODUCTS_REQUEST_SUCCESS;

  constructor(public payload: Product[]) {
  }
}

export class GetProductsRequestFail {
  static type = ActionTypes.GET_PRODUCTS_REQUEST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
