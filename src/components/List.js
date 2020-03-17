import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { getFilteredList } from '../selectors/filters';
import Filter from './Filter';
import listStyles from './List.module.css';

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  formatNum(num) {
    return num ? num.toLocaleString('en-US', {minimumFractionDigits: 4, maximumFractionDigits: 4}) : '-';
  }

  render() {
    const { data, date, loading } = this.props;

    const listContent = loading ?
      <div className={listStyles.tableContainer}>
        <span className="loader is-size-2" /> 
      </div> :
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
              {data.map((item, i) => 
                <tr key={i}>
                  <td>{item[0]}</td>
                  <td>{this.formatNum(item[1])}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>;

    return (
      <section className={`section ${listStyles.list}`}>
        <h3 className="subtitle is-3 has-text-centered">
          New Zealand Dollar<br/>Foreign Exchange Rates: {date}
        </h3>
        {listContent}
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  data: getFilteredList(state.rates.data, state.filter),
  date: state.rates.date,
  loading: state.rates.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
