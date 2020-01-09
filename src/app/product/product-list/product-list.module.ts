import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    ProductListRoutingModule,
    MatCardModule,
  ],
})
export class ProductListModule {
}
