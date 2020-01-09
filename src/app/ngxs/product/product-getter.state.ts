import { Selector } from '@ngxs/store';

import { ProductState, ProductStateModel } from './product.state';

export class ProductGetterState {

  @Selector([ProductState])
  static getProducts({ ids, entities }: ProductStateModel) {
    return ids.map(id => entities[id]);
  }

  @Selector([ProductState])
  static getSelectedProduct({ selectedProductId, entities}: ProductStateModel) {
    return entities[selectedProductId];
  }
}
