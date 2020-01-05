import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { FormError } from '../../shared/models/form-error.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  showErrorsIfSubmitted: boolean;
  public errors: FormError;

  get usernameControl(): AbstractControl {
    return this.signInForm.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.signInForm.get('password');
  }

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.setErrors();
    this.createSignInForm();
    this.showErrorsIfSubmitted = false;
  }

  createSignInForm() {
    const validationFormValue = {
      username: {
        minlength: 4,
      },
      password: {
        minlength: 6,
      },
    };

    this.signInForm = new FormGroup({
      username: new FormControl( '', [
          Validators.required,
          Validators.minLength(validationFormValue.username.minlength),
        ],
      ),
      password: new FormControl( '', [
          Validators.required,
          Validators.minLength(validationFormValue.password.minlength),
        ],
      ),
    });
  }

  onSubmit() {
    this.showErrorsIfSubmitted = true;
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value);
    }
  }

  setErrors() {
    this.errors = {
      username: [
        {name: 'required', text: 'Username is required'},
        {name: 'minlength', text: `Min length is 4 symbols`},
      ],
      password: [
        {name: 'required', text: 'Password is required'},
        {name: 'minlength', text: `Min length is 6 symbols`},
      ],
    };
  }
}
