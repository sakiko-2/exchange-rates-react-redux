import {
  LOADING,
  FETCH_SUCCESS,
  SET_TEXT_FILTER,
  SORT_BY_CURRENCY,
  SORT_BY_RATE,
} from './actionTypes';

const URL = 'https://api.exchangeratesapi.io/latest?base=NZD';

export const loading = (bool) => ({
  type: LOADING,
  loading: bool
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data
});

export const fetchData = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(fetchSuccess(responseData));
      dispatch(loading(false));
    })
    .catch((error) => console.log('Error:', error ));
};

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

export const sortByCurrency = () => ({
  type: SORT_BY_CURRENCY
});

export const sortByRate = () => ({
  type: SORT_BY_RATE
});
