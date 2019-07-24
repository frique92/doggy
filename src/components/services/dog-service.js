export default class DogService {

  _apiBase = 'https://dog.ceo/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getListBreeds = async () => {

    const res = await this.getResource('/breeds/list');

    return res.message;

  }
  getRandomPhotoOfBreed = async (breed, countRandomPhoto) => {
    const res = await this.getResource(`/breed/${breed}/images/random/${countRandomPhoto}`);

    return res.message;

  }

}