import { Product } from '../../shared/models/product.model';

const ActionTypes = {
  GET_PRODUCTS: '[Product] Get Products',
  SET_PRODUCTS: '[Product] Set Products',

  SELECT_PRODUCT: '[Product] Select Products',
};

export class GetProducts {
  static type = ActionTypes.GET_PRODUCTS;
}

export class SetProducts {
  static type = ActionTypes.SET_PRODUCTS;

  constructor(public payload: Product[]) {
  }
}

export class SelectProduct {
  static type = ActionTypes.SELECT_PRODUCT;

  constructor(public payload: string) {
  }
}
