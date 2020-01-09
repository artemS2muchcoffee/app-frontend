import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class SnackService {

  constructor(
    public snack: MatSnackBar,
  ) {
  }

  showSnack(message, duration = 4000, type = 'error', bottom?) {
    this.snack.open(message, null, {
      duration,
      panelClass: type === 'error' ? ['snack-error'] : ['snack-success'],
      horizontalPosition: 'center',
      verticalPosition: bottom ? 'bottom' : 'top',
    });
  }

}

