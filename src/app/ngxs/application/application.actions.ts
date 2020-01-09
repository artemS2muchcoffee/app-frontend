const ActionTypes = {
  SHOW_SNACK: '[Application] Show Snack',
};

export class ShowSnackAction {
  static type = ActionTypes.SHOW_SNACK;

  constructor(public message: string) {
  }
}
