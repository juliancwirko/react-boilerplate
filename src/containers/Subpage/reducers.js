import { RECEIVE_SUBPAGE_DATA } from './actions';

const subpageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SUBPAGE_DATA:
      return Object.assign({}, state, { isFetching: false, items: action.data });
    default:
      return state;
  }
};

export default subpageReducer;
