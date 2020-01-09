import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ApplicationService } from '../core/services/application.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

  showSpinner$: Observable<boolean>;

  constructor(
    private applicationService: ApplicationService,
  ) {
  }

  ngOnInit() {
    this.showSpinner$ = this.applicationService.isLoading$;
  }
}
