import { IRequestsNestedState } from './requests/requests.interface';
import { IRequestsNestedStatus } from '../shared/enums/i-requests-nested-status.enum';

export const requestInitialState: IRequestsNestedState = {
  loading: false,
  loaded: false,
  status: '',
  data: null,
};

export const requestLoadingState: IRequestsNestedState = {
  loading: true,
  loaded: false,
  status: '',
  data: null,
};

export const requestSuccessState = (payload): IRequestsNestedState => {
  return {
    loading: false,
    loaded: true,
    status: IRequestsNestedStatus.Success,
    data: payload,
  };
};

export const requestFailState = (payload): IRequestsNestedState => {
  return {
    loading: false,
    loaded: true,
    status: IRequestsNestedStatus.Fail,
    data: payload,
  };
};
