import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-validation-error',
  templateUrl: 'form-validation-error.component.html',
  styleUrls: ['form-validation-error.component.scss'],
})
export class FormValidationErrorComponent {
  private formClasses: string;

  @Input() control;
  @Input() markAsDirty;
  @Input() errors;

  @Input('classes')
  set classes(value: string) {
    this.formClasses = value;
  }

  get classes() {
    return this.formClasses || 'validate-error';
  }

  hasError(error) {
    if (error.parent && this.control.parent) {
      return this.control.parent.hasError(error.name);
    }
    return this.control.hasError(error.name);
  }
}
