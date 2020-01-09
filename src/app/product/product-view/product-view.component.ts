import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ProductService } from '../../core/services/product.service';
import { ReviewService } from '../../core/services/review.service';
import { Product } from '../../shared/models/product.model';
import { Review } from '../../shared/models/review.model';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  form: FormGroup;
  url: string;
  product$: Observable<Product>;
  reviews$: Observable<Review[]>;
  isGuest$: Observable<boolean>;
  isEmpty$: Observable<boolean>;
  commonProductRate$: Observable<number>;
  dialogConfig = { width: '100vw', maxWidth: '490px' };

  get textControl(): AbstractControl {
    return this.form.get('text');
  }

  get rateControl(): AbstractControl {
    return this.form.get('rate');
  }

  constructor(
    private productService: ProductService,
    private reviewService: ReviewService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.createAddReviewsForm();
    this.url = environment.SERVER_URL;
    this.product$ = this.productService.selectedProduct$;
    this.reviews$ = this.reviewService.reviews$.pipe(
      map(reviews => reviews.sort((a, b) =>  this.sortBy(a.created_at, b.created_at)))
    );
    this.isGuest$ = this.authService.isGuest$;
    this.isEmpty$ = this.textControl.valueChanges.pipe(
      startWith(''),
      map(value => !value),
    );
    this.commonProductRate$ = this.reviewService.commonProductRate$;
  }

  createAddReviewsForm() {
    this.form = new FormGroup({
      text: new FormControl( ''),
      rate: new FormControl( 0),
    });
  }

  onSubmit() {
    if (this.textControl.value) {
      this.reviewService.postProductReview(this.form.value);
      this.cancelSubmit();
    }
  }

  sortBy(a: string, b: string) {
    return Date.parse(b) - Date.parse(a);
  }

  cancelSubmit() {
    this.form.patchValue({
      text: '',
      rate: 0,
    });
  }

  convertCreatedAtValue(createdAt: string) {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October' ,
      'November',
      'December',
    ];
    const date = new Date(createdAt);
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
  }

  openAuthorizationDialog() {
    this.dialog.open(AuthDialogComponent, this.dialogConfig);
  }
}
