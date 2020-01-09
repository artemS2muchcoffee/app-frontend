import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { GetProductsResolver } from '../core/resolvers/get-products.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: [GetProductsResolver],
    children: [
      {
        path: 'product-list',
        loadChildren: () => import('./product-list/product-list.module').then(mod => mod.ProductListModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./product-view/product-view.module').then(mod => mod.ProductViewModule),
      },
      {
        path: '**',
        redirectTo: 'product-list',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
