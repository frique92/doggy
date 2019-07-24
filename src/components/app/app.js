import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemList from '../item-list/item-list';
import BreedPhoto from '../breed-photo';
import SearchPanel from '../search-panel';
import InputCount from '../input-count';

import './app.css';

export default class App extends Component {

  state = {
    selectedBreed: null,
    search: '',
    countRandomPhoto: 1
  }

  onSearchChange = (search) => {
    this.setState({ search });
  };

  onBreedSelected = (breed) => {
    this.setState({
      selectedBreed: breed
    });
  }
  onCountChange = (countRandomPhoto) => {
    this.setState({ countRandomPhoto });
  }

  render() {

    return (
      <div className="container-fluid">
        <AppHeader />

        <div className="row">
          <div className="col-md-4 sticky-top scroll-item-list">
            <div className="d-flex justify-content-between">
              <SearchPanel
                onSearchChange={this.onSearchChange} />

              <InputCount
                onCountChange={this.onCountChange}
                countRandomPhoto={this.state.countRandomPhoto} />
            </div>

            <ItemList
              search={this.state.search}
              onClickItem={this.onBreedSelected} />
          </div>
          <div className="col-md-8">
            <h2>{this.state.selectedBreed}</h2>

            <BreedPhoto
              breed={this.state.selectedBreed}
              countRandomPhoto={this.state.countRandomPhoto} />
          </div>
        </div>

      </div>
    );

  }

}