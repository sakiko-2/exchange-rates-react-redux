export const getFilteredList = (data, { sortBy, text }) => {
  return data.filter((item) => (
        (item[0] !== 'NZD') &&
        (item[0].toLowerCase().includes(text.toLowerCase()))
      ))
    .sort((a, b) => {
      if (sortBy === 'currency') {
        return a[0] > b[0];
      } else if (sortBy === 'rate') {
        return a[1] > b[1];
      }
    })
};
