import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormError } from '../../shared/models/form-error.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  showErrorsIfSubmitted: boolean;
  public errors: FormError;

  get usernameControl(): AbstractControl {
    return this.signUpForm.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.signUpForm.get('password');
  }

  get confirmPasswordControl(): AbstractControl {
    return this.signUpForm.get('confirmPassword');
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

    this.signUpForm = new FormGroup({
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
      confirmPassword: new FormControl( '', [
          Validators.required,
          Validators.minLength(validationFormValue.password.minlength),
        ],
      ),
    }, this.validateEqualPassword);
  }

  onSubmit() {
    this.showErrorsIfSubmitted = true;
    if (this.signUpForm.valid) {
      const { username, password } = this.signUpForm.value;
      this.authService.signUp({ username, password });
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
