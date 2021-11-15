/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { getFilteredList } from '../selectors/filters';
import Filter from './Filter';
import listStyles from './List.module.css';

class List extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchData();
  }

  formatNum(num) {
    return num ? num.toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 }) : '-';
  }

  render() {
    const { data, date, loading } = this.props;

    const listContent = loading ? (
      <div className={listStyles.tableContainer}>
        <span className="loader is-size-2" />
      </div>
    )
      : (
        <>
          <Filter />
          <div className={listStyles.tableContainer}>
            <table className={`table is-striped ${listStyles.table}`}>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item[0]}>
                    <td>{item[0]}</td>
                    <td>{this.formatNum(item[1])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );

    return (
      <section className={`section ${listStyles.list}`}>
        <h3 className="subtitle is-3 has-text-centered">
          New Zealand Dollar
          <br />
          Foreign Exchange Rates:
          <span className={listStyles.date}>{date}</span>
        </h3>
        {listContent}
      </section>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ),
  ),
  date: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

List.defaultProps = {
  data: [],
  date: '',
};

const mapStateToProps = (state) => ({
  data: getFilteredList(state.rates.data, state.filter),
  date: state.rates.date,
  loading: state.rates.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
