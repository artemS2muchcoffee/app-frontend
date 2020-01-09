import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class ProductModule {
}
