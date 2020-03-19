import { SET_TEXT_FILTER, SORT_BY_CURRENCY, SORT_BY_RATE } from '../actions/actionTypes';

const defaultState = {
  text: '',
  sortBy: 'currency',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
      };
    case SORT_BY_CURRENCY:
      return {
        ...state,
        sortBy: 'currency',
      };
    case SORT_BY_RATE:
      return {
        ...state,
        sortBy: 'rate',
      };
    default:
      return state;
  }
};
