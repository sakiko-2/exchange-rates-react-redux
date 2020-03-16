import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import {
  setTextFilter,
  sortByCurrency,
  sortByRate,
} from '../actions';
import filterStyles from './Filter.module.css';

const Filter = (props) => {
  const [dropdownState, setDropdownState] = useState({ active: false });

  const showDropdown = dropdownState.active ? 'is-active' : '';

  const toggleDropdown = () => {
    setDropdownState({ active: !dropdownState.active });
  }

  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  };

  return (
    <div className="container">
      <div className="field">
        <p className="control has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Search currency"
            onChange={(e) => onTextChange(e)}
            value={props.text}
          />
          <span className="icon is-small is-right">
            <Search />
          </span>
        </p>
      </div>
      <div className="has-text-centered">
        {'Sort by '}
        <div className={`dropdown ${showDropdown}`}>
          <div className="dropdown-trigger">
            <a
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
              onClick={() => toggleDropdown()}
            >
              <span className={filterStyles.sort}>{props.sortBy}</span>
            </a>
          </div>
          <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item" onClick={() => { props.sortByCurrency(); toggleDropdown() }}>
                Currency
              </a>
              <a href="#" className="dropdown-item" onClick={() => { props.sortByRate(); toggleDropdown() }}>
                Rate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sortBy: state.filter.sortBy,
  text: state.filter.text,
});

const mapDispatchToProps = (dispatch) => ({
  sortByCurrency: () => dispatch(sortByCurrency()),
  sortByRate: () => dispatch(sortByRate()),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
