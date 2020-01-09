import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { environment } from '../../environments/environment';
import { AuthState } from './auth/auth.state';
import { SignInRequestState } from './requests/auth/sign-in/sign-in.request.state';
import { SignUpRequestState } from './requests/auth/sign-up/sign-up.request.state';
import { ApplicationState } from './application/application.state';
import { ProductState } from './product/product.state';
import { ReviewState } from './review/review.state';
import { GetProductsRequestState } from './requests/product/get-products/get-products.request.state';
import { GetProductReviewsRequestState } from './requests/review/get-product-reviews/get-product-reviews.request.state';
import { PostProductReviewRequestState } from './requests/review/post-product-review/post-product-review.request.state';

@NgModule({
  imports: [
    NgxsModule.forRoot(
    [
      AuthState,
      ApplicationState,
      ProductState,
      ReviewState,
      // requests
      SignInRequestState,
      SignUpRequestState,
      GetProductsRequestState,
      GetProductReviewsRequestState,
      PostProductReviewRequestState,
    ],
      { developmentMode: !environment.production },
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
  ],
})
export class NgxsStoreModule {
}
