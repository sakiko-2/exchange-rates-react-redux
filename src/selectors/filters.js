/* eslint-disable import/prefer-default-export */
export const getFilteredList = (data, { sortBy, text }) => (
  data.filter((item) => (
    (item[0] !== 'NZD')
    && (item[0].toLowerCase().includes(text.toLowerCase()))
  ))
    .sort((a, b) => {
      if (sortBy === 'rate') {
        return a[1] > b[1] ? 1 : -1;
      }
      return a[0] > b[0] ? 1 : -1;
    })
);
