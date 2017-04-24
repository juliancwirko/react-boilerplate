import 'whatwg-fetch';
import { apiEndpoints } from '../../settings';

export const RECEIVE_HOME_DATA = 'RECEIVE_HOME_DATA';

export function receiveHomeData(data) {
  return {
    type: RECEIVE_HOME_DATA,
    data,
  };
}

export function requestHomeData() {
  return dispatch => fetch(apiEndpoints.testAPIHomepage)
    .then(response => response.json())
    .then(json => dispatch(receiveHomeData(json)));
}
