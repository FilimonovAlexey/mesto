export class Api {
  constructor(options) {
    this._options = options
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }

  getProfile() {
    return fetch(
      `${this._options.baseUrl}/users/me`, {
      headers: this._options.headers
    })
      .then((res) => this._getResponseData(res))
  }

  getCards() {
    return fetch(
      `${this._options.baseUrl}/cards`, {
      headers: this._options.headers
    })
    .then((res) => this._getResponseData(res))
  }

  editProfile(data) {
    return fetch(
      `${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then((res) => this._getResponseData(res))
  }

  addCard(data) {
    return fetch(
      `${this._options.baseUrl}/cards `, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._getResponseData(res))
  }

  deleteCard(cardId) {
    return fetch(
      `${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then((res) => this._getResponseData(res))
  }

  addLike(cardId) {
    return fetch(
      `${this._options.baseUrl}/cards/${cardId}/likes `, {
      method: 'PUT',
      headers: this._options.headers,
    })
    .then((res) => this._getResponseData(res))
  }

  deleteLike(cardId) {
    return fetch(
      `${this._options.baseUrl}/cards/${cardId}/likes `, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then((res) => this._getResponseData(res))
  }

  changeAvatar(avatarLink) {
    return fetch(
      `${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      })
    })
    .then((res) => this._getResponseData(res))
  }
}


