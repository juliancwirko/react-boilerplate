import { ADD_TODO, COUNTER_TICK } from './actions';
import { combineReducers } from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.text]);
    default:
      return state;
  }
}

function ticker(state = 0, action) {
  switch (action.type) {
    case COUNTER_TICK:
      return state + 1;
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  todos,
  ticker,
});

export default mainReducer;
