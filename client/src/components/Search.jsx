import React from 'react';

var Search = (props) => (
    <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.handleInput}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
      Submit
    </button>
  </div>
);

export default Search;