import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_TEXT_FILTER,
  SORT_BY_CURRENCY,
  SORT_BY_RATE,
} from './actionTypes';

const URL = 'https://api.exchangerate.host/latest?base=NZD';

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  loading: false,
  data,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error,
});

export const fetchData = () => (dispatch) => {
  dispatch(fetchRequest());
  fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(fetchSuccess(responseData));
    })
    .catch((error) => dispatch(fetchFailure(error)));
};

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

export const sortByCurrency = () => ({
  type: SORT_BY_CURRENCY,
});

export const sortByRate = () => ({
  type: SORT_BY_RATE,
});
