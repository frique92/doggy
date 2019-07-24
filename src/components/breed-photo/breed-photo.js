import React, { Component } from 'react';
import DogService from '../services/dog-service'

import './breed-photo.css';

export default class BreedPhoto extends Component {

  dogService = new DogService();

  state = {
    photos: null
  }

  componentDidMount() {
    this.updateBreed();
  }

  componentDidUpdate(prevProps) {
    if (this.props.breed !== prevProps.breed
      || this.props.countRandomPhoto !== prevProps.countRandomPhoto) {
      this.updateBreed();
    }
  }

  updateBreed() {
    const { breed, countRandomPhoto } = this.props;
    if (!breed) {
      return;
    }

    this.dogService
      .getRandomPhotoOfBreed(breed, countRandomPhoto)
      .then((photos) => {
        this.setState({ photos });
      });
  }

  renderItems = (photos) => {
    const items = photos.map((photoSrc, index) => {
      return (
        <div
          key={index}
          className="photo-breed">
          <img src={photoSrc} alt="breed" className="img-fluid rounded" />
        </div>
      );
    });

    return items;
  }

  render() {

    if (!this.state.photos) {
      return <span>Select a breed from a list</span>;
    }

    const items = this.renderItems(this.state.photos);

    return (
      <div className="d-flex flex-wrap">
        {items}
      </div>
    );

  }

}