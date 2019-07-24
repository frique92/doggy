import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    this.setState({
      term: e.target.value
    });

    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (

      <div className="d-flex flex-column search-input">
        <label htmlFor="search-input">Filter breeds</label>
        <input type="text"
             className="form-control"
             placeholder="type to search"
             value={this.state.term}
             onChange={ this.onTermChange } 
             name="search-input"/>
      </div>

      
    );
  };
}
