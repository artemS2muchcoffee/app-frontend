import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductService } from '../../core/services/product.service';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  url: string;
  products$: Observable<Product[]>;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.url = environment.SERVER_URL;
    this.products$ = this.productService.products$;
  }

  openProduct(id: string) {
    this.router.navigate(['/', 'product', id]);
  }
}
