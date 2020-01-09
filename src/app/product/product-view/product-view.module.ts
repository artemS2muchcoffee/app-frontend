import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTabsModule,
} from '@angular/material';
import { BarRatingModule } from 'ngx-bar-rating';

import { SharedModule } from '../../shared/shared.module';
import { ProductViewComponent } from './product-view.component';
import { ProductViewRoutingModule } from './product-view-routing.module';
import { AuthDialogModule } from './auth-dialog/auth-dialog.module';

@NgModule({
  declarations: [
    ProductViewComponent,
  ],
  imports: [
    SharedModule,
    ProductViewRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    BarRatingModule,
    AuthDialogModule,
  ],
})
export class ProductViewModule {
}
