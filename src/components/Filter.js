import React from 'react';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import { setTextFilter } from '../actions';

const Filter = (props) => {
  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  };

  return (
    <>
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
      <div>
        Sort by <strong>{props.sortBy}</strong>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sortBy: state.filter.sortBy,
  text: state.filter.text,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
