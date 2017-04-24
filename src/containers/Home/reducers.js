import { RECEIVE_HOME_DATA } from './actions';

const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HOME_DATA:
      return Object.assign({}, state, { isFetching: false, items: action.data });
    default:
      return state;
  }
};

export default homeReducer;
