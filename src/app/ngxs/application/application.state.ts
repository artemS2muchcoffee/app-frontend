import { Action, State, StateContext } from '@ngxs/store';

import { ShowSnackAction } from './application.actions';
import { SnackService } from '../../core/services/snack.service';

@State<{}>({
  name: 'application',
  defaults: {
  },
})
export class ApplicationState {

  constructor(
    private snackService: SnackService,
  ) {
  }

  @Action(ShowSnackAction)
  showSnack(ctx: StateContext<{}>, action: ShowSnackAction) {
    this.snackService.showSnack(action.message);
  }
}
