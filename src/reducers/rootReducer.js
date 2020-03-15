import { combineReducers } from 'redux';
import ratesReducer from './ratesReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  rates: ratesReducer,
  filter: filtersReducer,
});
