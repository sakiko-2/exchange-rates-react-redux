import { LOADING, FETCH_SUCCESS } from '../actions/actionTypes';

const ratesDefaultState = {
  data: [],
  date: '',
  loading: true,
};

export default (state = ratesDefaultState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: Object.entries(action.data.rates),
        date: action.data.date,
      };
    default:
      return state;
  }
};
