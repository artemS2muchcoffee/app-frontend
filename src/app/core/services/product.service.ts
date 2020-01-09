import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetProductsRequestGetterState } from '../../ngxs/requests/product/get-products/get-products-request-getter.state';
import { GetProducts, SelectProduct } from '../../ngxs/product/product.actions';
import { ProductGetterState } from '../../ngxs/product/product-getter.state';
import { Product } from '../../shared/models/product.model';
import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  @Select(GetProductsRequestGetterState.getProductsRequestState)
  getProductsRequestState$: Observable<IRequestsNestedState>;

  @Select(ProductGetterState.getProducts)
  products$: Observable<Product[]>;

  @Select(ProductGetterState.getSelectedProduct)
  selectedProduct$: Observable<Product>;

  constructor(
    private store: Store,
  ) {
  }

  getProducts() {
    this.store.dispatch(new GetProducts());
  }

  selectProduct(id: string) {
    this.store.dispatch(new SelectProduct(id));
  }
}
