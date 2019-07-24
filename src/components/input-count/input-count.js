import React, { Component } from 'react';

import './input-count.css';

export default class InputCount extends Component {

  state = {
    count: 0
  }
  
  componentDidMount() {
    this.setState({
      count: this.props.countRandomPhoto
    });
  }

  onCountChange = (e) => {
    this.setState({
      count: e.target.value
    });

    this.props.onCountChange(e.target.value);
  }

  render() {
    return (
      <div className="d-flex flex-column input-count">
        <label htmlFor="input-count-photo">Count photos</label>
        <input type="number"
          className="form-control "
          value={this.state.count}
          onChange={this.onCountChange}
          name="input-count-photo"
          min="1" />
      </div>
    );
  }
}