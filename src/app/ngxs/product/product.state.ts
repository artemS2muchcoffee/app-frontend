import { Action, State, StateContext } from '@ngxs/store';

import { Product } from '../../shared/models/product.model';
import { GetProducts, SelectProduct, SetProducts } from './product.actions';
import { GetProductsRequest } from '../requests/product/get-products/get-products.request.actions';

export interface ProductStateModel {
  entities: { [key: string]: Product };
  ids: string[];
  selectedProductId: string;
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    entities: {},
    ids: null,
    selectedProductId: null,
  },
})
export class ProductState {

  @Action(GetProducts)
  getProducts({ dispatch }: StateContext<ProductStateModel>) {
    dispatch(new GetProductsRequest());
  }

  @Action(SetProducts)
  setProducts({ patchState }: StateContext<ProductStateModel>, { payload }: SetProducts) {
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

  @Action(SelectProduct)
  selectProduct({ patchState }: StateContext<ProductStateModel>, { payload: selectedProductId }: SelectProduct) {
    patchState({
      selectedProductId,
    });
  }
}
