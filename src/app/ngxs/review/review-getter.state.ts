import { Selector } from '@ngxs/store';

import { ReviewState, ReviewStateModel } from './review.state';

export class ReviewGetterState {

  @Selector([ReviewState])
  static getReviews({ ids, entities}: ReviewStateModel) {
    return ids.map(id => entities[id]);
  }

  @Selector([ReviewState])
  static getCommonProductRate({ ids, entities}: ReviewStateModel) {
    const rates = ids.map(id => entities[id].rate);
    const commonRate = rates.reduce((acc, rateNum) => acc + rateNum, 0);
    return +(commonRate / rates.length).toFixed(1);
  }
}
