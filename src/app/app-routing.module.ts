import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsNotAuthenticatedGuard } from './core/guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    canLoad: [IsNotAuthenticatedGuard],
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule),
  },
  {
    path: '**',
    redirectTo: '/product/product-list',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
