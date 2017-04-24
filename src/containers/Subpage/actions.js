import 'whatwg-fetch';
import { apiEndpoints } from '../../settings';

export const RECEIVE_SUBPAGE_DATA = 'RECEIVE_SUBPAGE_DATA';

export function receiveSubpageData(data) {
  return {
    type: RECEIVE_SUBPAGE_DATA,
    data,
  };
}

export function requestSubpageData() {
  return dispatch => fetch(apiEndpoints.testAPISubpage)
    .then(response => response.json())
    .then(json => dispatch(receiveSubpageData(json)));
}
