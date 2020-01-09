import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './product-view.component';
import { GetProductReviewsResolver } from '../../core/resolvers/get-product-reviews.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductViewComponent,
    resolve: [GetProductReviewsResolver],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductViewRoutingModule {
}
