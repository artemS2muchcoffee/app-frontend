import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormError } from '../../models/form-error.model';
import { AuthService } from '../../../core/services/auth.service';
import { AuthType } from '../../enums/auth-type.enum';

@Component({
  selector: 'app-auth-form',
  templateUrl: 'auth-form.component.html',
  styleUrls: ['auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnChanges {

  form: FormGroup;
  showErrorsIfSubmitted: boolean;
  errors: FormError;
  type = AuthType;

  @Input() authType: AuthType;

  get usernameControl(): AbstractControl {
    return this.form.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.form.get('password');
  }

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.setErrors();
    this.showErrorsIfSubmitted = false;
  }

  ngOnChanges() {
    this.createForm();
  }

  createForm() {
    const validationFormValue = {
      username: {
        minlength: 4,
      },
      password: {
        minlength: 6,
      },
    };

    this.form = new FormGroup({
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

    if (this.authType === AuthType.SignUp) {
      this.form.addControl('confirmPassword', new FormControl('', [
        Validators.required,
        Validators.minLength(validationFormValue.password.minlength),
      ]));
      this.form.setValidators(this.validateEqualPassword);
    }
  }

  onSubmit() {
    this.showErrorsIfSubmitted = true;
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.authType === AuthType.SignUp ? this.authService.signUp({ username, password }) :
        this.authService.signIn({ username, password });
    }
  }

  validateEqualPassword(control: FormGroup) {
    const pass = control.value.password;
    const confirmPass = control.value.confirmPassword;
    if (pass !== confirmPass) {
      control.controls[`confirmPassword`].setErrors({
        ...control.controls[`confirmPassword`].errors,
        notEqual: true,
      });
    }
    return null;
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
      confirmPassword: [
        {name: 'required', text: 'Password confirmation is required'},
        {name: 'minlength', text: `Min length is 6 symbols`},
        {name: 'notEqual', text: 'Passwords are not equal'},
      ],
    };
  }
}
