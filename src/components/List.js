import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { getFilteredList } from '../selectors/filters';
import Filter from './Filter';

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, date } = this.props;

    return (
      <div>
        <h3 className="subtitle is-3">
          New Zealand Dollar<br/>Foreign Exchange Rates: {date}
        </h3>
        <Filter />
        <table className="table is-striped">
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
                <td>{item[1]}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  data: getFilteredList(state.rates.data, state.filter),
  date: state.rates.date,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
