import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducers';
import subpageReducer from './containers/Subpage/reducers';

const mainReducer = combineReducers({
  homeReducer,
  subpageReducer,
});

export default mainReducer;
