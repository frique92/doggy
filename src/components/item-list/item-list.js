import React, { Component } from 'react';

import DogService from '../services/dog-service';

import './item-list.css'

export default class ItemList extends Component {

  dogService = new DogService();

  state = {
    breedsList: null
  };

  componentDidMount() {
    this.dogService
      .getListBreeds()
      .then((breedsList) => {
        this.setState({
          breedsList
        });
      });
  }

  filterList(breedsList, search) {
    if (search.length === 0) {
      return breedsList;
    }

    return breedsList.filter((item) => {
      return item.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  renderItems(breedsList, onClickItem) {

    return breedsList.map((breed) => {
      return (<li
        key={breed}
        className="list-group-item"
        value={breed}
        onClick={() => onClickItem(breed)}>
        {breed} </li>);
    });

  }

  render() {

    const { breedsList } = this.state;
    const { onClickItem, search } = this.props;

    if (!breedsList) return <p>loading...</p>

    const filteredList = this.filterList(breedsList, search);

    const items = this.renderItems(filteredList, onClickItem);

    return (
      <ul className="list-group list-group-flush">
        {items}
      </ul>
    );
  }

}